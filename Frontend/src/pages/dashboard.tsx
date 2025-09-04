import "../css/dashboard.css";
import { useState, useEffect } from "react";
import DashboardSection from "../components/dashboardSections";
import { database } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { type SensorInfo } from "../types";

function decodeSensors(value: unknown): SensorInfo[] {
  // value can be a JSON string or already an array (defensive)
  let arr: any[] = [];
  try {
    if (typeof value === "string") {
      arr = JSON.parse(value);
    } else if (Array.isArray(value)) {
      arr = value;
    } else if (value != null) {
      // sometimes Firestore might store as object-like; normalize
      arr = [value];
    }
  } catch (e) {
    console.error("Failed to parse sensors JSON:", e, value);
    return [];
  }

  // Map SQL-style keys (Sensor/Measurement/Unit) to UI shape (sensor/measurement/unit)
  return arr.map((row: any) => ({
    // keep Id if you want to use it as a key somewhere else
    sensor: row.Sensor ?? row.sensor ?? "",
    measurement: Number(row.Measurement ?? row.measurement ?? 0),
    unit: row.Unit ?? row.unit ?? "",
  }));
}

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

      // Read single Firestore document
      const ref = doc(database, "sensors", "latestData");
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        setError("No Firestore data found.");
        return;
      }

      const data = snap.data();
      const header = decodeSensors(data.headerSensors);
      const separator = decodeSensors(data.separatorSensors);

      setHeaderSensors(header);
      setSeparatorSensors(separator);
      setError("");
    } catch (err) {
      console.error("❌ Error fetching Firestore data:", err);
      setError("Failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchData();                 // first load
    const id = setInterval(fetchData, 3000); // refresh every 3s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="dashboard">
      {error && <p className="error">{error}</p>}
      <DashboardSection heading="Header Sensors" sensors={headerSensors} />
      <DashboardSection heading="Separator Sensors" sensors={separatorSensors} />
    </div>
  );
}
