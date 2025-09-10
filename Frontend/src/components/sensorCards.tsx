import { type SensorInfo } from "../types";
import "../css/global.css";

export default function SensorCard({ sensor, measurement, unit }: SensorInfo) {
  let borderClass = "border-green"; // default

  if (measurement >= 1 && measurement <= 500) {
    borderClass = "border-red";
  } else if (measurement >= 501 && measurement <= 1200) {
    borderClass = "border-yellow";
  } else if (measurement >= 1201 && measurement <= 1600) {
    borderClass = "border-green";
  } else {
    borderClass = "border-red";
  }

  return (
    <div className={`sensor-card ${borderClass}`}>
      <span className="sensor-label">{sensor}</span>
      <div className="sensor-data">
        <span className="sensor-value">{measurement}</span>
        {(measurement <= 1600) && <span className="sensor-unit">{unit}</span>}
        {(measurement >= 1601) && (
          <span className="sensor-unit">Warning pressure is too high ⚠️</span>
        )}
        {(measurement <= 0) && (
          <span className="sensor-unit">No pressure detected ❌</span>
        )}
      </div>
    </div>
  );
}
