import React, { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "../css/global.css";

type SensorInfo = {
  sensor: string;
  measurement: number;
  unit: string;
  category: string;
};

function decodeSensors(value: unknown): SensorInfo[] {
  if (!value || !Array.isArray(value)) return [];

  return value.map((row: any) => ({
    sensor: row.Sensor ?? row.sensor ?? "",
    measurement: Number(row.Measurement ?? row.measurement ?? 0),
    unit: row.Unit ?? row.unit ?? "",
    category: row.Category ?? row.category ?? "",
  }));
}

const getCardStatus = (measurement: number, unit: string) => {
  if (unit === "psi") {
    if (measurement < 100)
      return { indicatorColor: "red", message: "Warning: Pressure is too low" };
    if (measurement < 600)
      return { indicatorColor: "yellow", message: "Warning: Pressure is little low" };
    if (measurement > 2000)
      return { indicatorColor: "red", message: "Warning: Pressure is too high" };
    return { indicatorColor: "green", message: null };
  }

  if (unit === "°C") {
    if (measurement < 500)
      return { indicatorColor: "yellow", message: "Warning: Temperature is little low" };
    if (measurement > 1500)
      return { indicatorColor: "red", message: "Warning: Temperature is too high" };
    return { indicatorColor: "green", message: null };
  }

  return { indicatorColor: "gray", message: null };
};

const Dashboard: React.FC = () => {
  const [groupedSensors, setGroupedSensors] = useState<
    Record<string, SensorInfo[]>
  >({});
  const [error, setError] = useState("");

  useEffect(() => {
    const ref = doc(database, "sensors", "latestData");

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

        try {
          const parsed = JSON.parse(raw);
          const sensors = decodeSensors(parsed.sensors);

          const grouped = sensors.reduce<Record<string, SensorInfo[]>>(
            (acc, s) => {
              if (!acc[s.category]) acc[s.category] = [];
              acc[s.category].push(s);
              return acc;
            },
            {}
          );

          setGroupedSensors(grouped);
          setError("");
        } catch (err) {
          console.error("❌ Failed to parse Firestore JSON:", err);
          setError("Failed to parse Firestore JSON.");
        }
      },
      (err) => {
        console.error("❌ Firestore snapshot error:", err);
        setError("Failed to fetch data.");
      }
    );

    return () => unsubscribe();
  }, []);

  const SensorSection: React.FC<{ heading: string; sensors: SensorInfo[] }> = ({
    heading,
    sensors,
  }) => (
    <div className="section">
      <h2 className="section-heading">{heading}</h2>
      <div className="section-content">
        {sensors.map((sensor, index) => {
          const { indicatorColor, message } = getCardStatus(
            sensor.measurement,
            sensor.unit
          );
          return (
            <div key={index} className="sensor-card">
              <div className={`indicator ${indicatorColor}`} />
              <p className="sensor-name">{sensor.sensor}</p>
              <div className="measurement">
                <span className="value">{sensor.measurement}</span>
                <span className="unit">{sensor.unit}</span>
              </div>
              {message && (
                <div className="warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.511a.75.75 0 011.486 0L14.73 11.2a.75.75 0 01-.664 1.155H5.934a.75.75 0 01-.664-1.155L8.257 3.511zM10 13a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {message}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {error && <p className="error">{error}</p>}
        {Object.entries(groupedSensors).map(([category, sensors]) => (
          <SensorSection key={category} heading={category} sensors={sensors} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
