import "../css/dashboard.css";
import { useState, useEffect } from "react";
import DashboardSection from "../components/dashboardSections";
import { database } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { type SensorInfo } from "../types";

function decodeSensors(value: unknown): SensorInfo[] {
  let arr: any[] = [];
  try {
    if (typeof value === "string") {
      arr = JSON.parse(value);
    } else if (Array.isArray(value)) {
      arr = value;
    } else if (value != null) {
      arr = [value];
    }
  } catch (e) {
    console.error("Failed to parse sensors JSON:", e, value);
    return [];
  }

  return arr.map((row: any) => ({
    sensor: row.Sensor ?? row.sensor ?? "",
    measurement: Number(row.Measurement ?? row.measurement ?? 0),
    unit: row.Unit ?? row.unit ?? "",
    category: row.Category ?? row.category ?? "",
  }));
}

export default function Dashboard() {
  const [headerSensors, setHeaderSensors] = useState<SensorInfo[]>([]);
  const [separatorSensors, setSeparatorSensors] = useState<SensorInfo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const ref = doc(database, "sensors", "latestData");

    // 👇 Listen for live updates
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        if (!snap.exists()) {
          setError("No Firestore data found.");
          return;
        }

        const raw = snap.data().data;
        if (!raw || typeof raw !== "string") {
          setError("Invalid Firestore data format.");
          return;
        }

        const parsed = JSON.parse(raw); // { sensors: [...], updatedAt }
        const sensors = decodeSensors(parsed.sensors);

        const header = sensors.filter((s) => s.category === "Header");
        const separator = sensors.filter((s) => s.category === "Separator");

        setHeaderSensors(header);
        setSeparatorSensors(separator);
        setError("");
      },
      (err) => {
        console.error("❌ Firestore snapshot error:", err);
        setError("Failed to fetch data.");
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard">
      {error && <p className="error">{error}</p>}
      <DashboardSection heading="Header Sensors" sensors={headerSensors} />
      <DashboardSection heading="Separator Sensors" sensors={separatorSensors} />
    </div>
  );
}
