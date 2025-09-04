import "../css/dashboard.css";
import { useState, useEffect } from "react";
import DashboardSection from "../components/dashboardSections";
import { database } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { type SensorInfo } from "../types";

export default function Dashboard() {
  const [headerSensors, setHeaderSensors] = useState<SensorInfo[]>([]);
  const [separatorSensors, setSeparatorSensors] = useState<SensorInfo[]>([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("No auth token found. Please login.");
        return;
      }

      // Optional: verify token with backend
      const verify = await fetch("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!verify.ok) {
        setError("Unauthorized. Please login again.");
        return;
      }

      // 🔥 Get single Firestore doc (latestData)
      const ref = doc(database, "sensors", "latestData");
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setHeaderSensors(JSON.parse(data.headerSensors));
        setSeparatorSensors(JSON.parse(data.separatorSensors));
      }
    } catch (err) {
      console.error("❌ Error fetching Firestore data:", err);
      setError("Failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchData(); // first load
    const id = setInterval(fetchData, 3000); // refresh every 3s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="dashboard">
      {error && <p className="error">{error}</p>}

      {/* 🔹 Pass SensorInfo[] directly to DashboardSection */}
      <DashboardSection heading="Header Sensors" sensors={headerSensors} />
      <DashboardSection heading="Separator Sensors" sensors={separatorSensors} />
    </div>
  );
}
