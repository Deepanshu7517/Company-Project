import SensorCard from "../components/sensorCards";
import { type SensorInfo } from "../types";
import "../css/dashboardSections.css"; // import css file

interface Props {
  heading: string;
  sensors: SensorInfo[];
}

export default function DashboardSection({ heading, sensors }: Props) {
  return (
    <div className="dashboard-section">
      <h2 className="dashboard-heading">{heading}</h2>
      <div className="dashboard-grid">
        {sensors.map((sensor, index) => (
          <SensorCard key={index} {...sensor} />
        ))}
      </div>
    </div>
  );
}
