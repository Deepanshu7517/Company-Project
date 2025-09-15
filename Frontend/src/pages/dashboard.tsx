import React, { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "../css/global.css";
import { type SensorInfo } from "../types";
import SensorCard from "../components/SensorsCard";
import { decodeSensors } from "../utils/decodeSensors";

const Dashboard: React.FC = () => {
  const [groupedSensors, setGroupedSensors] = useState<
    Record<string, SensorInfo[]>
  >({});
  const [error, setError] = useState("");
  const [DateAndTime, setDateAndTime] = useState<string>("");

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
          const grouped = sensors.reduce(
            (acc: Record<string, SensorInfo[]>, s) => {
              const category = s.category || "Uncategorized"; // 👈 fallback
              if (!acc[category]) acc[category] = [];
              acc[category].push(s);
              return acc;
            },
            {}
          );
          setDateAndTime(parsed.updatedAt);
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

  return (
    <div className="dashboard">
      <section>
        <div className="updated-status">
          <span>Date:</span>
          <span className="date">{DateAndTime.slice(0, 10)}</span>
          <span className="at">Time:</span>
          <span className="time">{DateAndTime.slice(11, 19)}</span>
        </div>
      </section>

      <div className="dashboard-container">
        {error && <p className="error">{error}</p>}
        {Object.entries(groupedSensors).map(([category, sensors]) => (
          <div key={category} className="section">
            <h2 className="section-heading">{category.toUpperCase()}</h2>
            <div className="section-content">
              {sensors.map((sensor, index) => (
                <SensorCard key={index} sensor={sensor} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
