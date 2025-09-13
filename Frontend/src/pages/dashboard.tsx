import React, { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

type SensorInfo = {
  sensor: string;
  measurement: number;
  unit: string;
  category: string;
  status?: string;
};

// 🔹 Decode Firestore sensors data
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

// 🔹 Threshold logic for warnings
const getCardStatus = (measurement: number, unit: string) => {
  if (unit === "psi") {
    if (measurement < 100)
      return {
        indicatorColor: "bg-red-500",
        message: "Warning: Pressure is too low",
      };
    if (measurement < 600)
      return {
        indicatorColor: "bg-yellow-500",
        message: "Warning: Pressure is little low",
      };
    if (measurement > 2000)
      return {
        indicatorColor: "bg-red-500",
        message: "Warning: Pressure is too high",
      };
    return { indicatorColor: "bg-green-500", message: null };
  }

  if (unit === "°C") {
    if (measurement < 500)
      return {
        indicatorColor: "bg-yellow-500",
        message: "Warning: Temperature is little low",
      };
    if (measurement > 1500)
      return {
        indicatorColor: "bg-red-500",
        message: "Warning: Temperature is too high",
      };
    return { indicatorColor: "bg-green-500", message: null };
  }

  return { indicatorColor: "bg-gray-400", message: null };
};

const Dashboard: React.FC = () => {
  const [headerSensors, setHeaderSensors] = useState<SensorInfo[]>([]);
  const [separatorSensors, setSeparatorSensors] = useState<SensorInfo[]>([]);
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

        const parsed = JSON.parse(raw);
        const sensors = decodeSensors(parsed.sensors);

        setHeaderSensors(sensors.filter((s) => s.category === "Header"));
        setSeparatorSensors(sensors.filter((s) => s.category === "Separator"));
        setError("");
      },
      (err) => {
        console.error("❌ Firestore snapshot error:", err);
        setError("Failed to fetch data.");
      }
    );

    return () => unsubscribe();
  }, []);

  // 🔹 Sub-component for rendering sensor cards
  const SensorSection: React.FC<{ heading: string; sensors: SensorInfo[] }> = ({
    heading,
    sensors,
  }) => (
    <>
      <div className="mb-14 border-2 border-[#233e73]   rounded-2xl">
        <h2
          className=" bg-gradient-to-br from-[#2e4784] via-[#1a3765] to-[#0d1d4b]
 text-xl text-center font-bold text-white mb-4  rounded-tl-xl rounded-tr-xl pb-2"
        >
          {heading}
        </h2>
        <div className="p-2 max-sm:p-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-6">
            {sensors.map((sensor, index) => {
              const { indicatorColor, message } = getCardStatus(
                sensor.measurement,
                sensor.unit
              );
              return (
                <div
                  key={index}
                  className="relative cursor-pointer bg-white rounded-lg shadow-md p-3 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg  hover:outline-1 hover:outline-blue-500 outline-amber-50"
                >
                  {/* Status indicator */}
                  <div
                    className={`absolute top-2 right-2 w-4 h-4 rounded-full ${indicatorColor} ring-2 ring-white`}
                  />
                  {/* Sensor name */}
                  <p className="text-gray-500 text-xs font-medium uppercase truncate mb-1">
                    {sensor.sensor}
                  </p>
                  {/* Measurement */}
                  <div className="flex items-baseline mt-1">
                    <span className="text-xl font-extrabold text-gray-900">
                      {sensor.measurement}
                    </span>
                    <span className="ml-1 text-sm font-normal text-gray-500">
                      {sensor.unit}
                    </span>
                  </div>
                  {/* Warning message */}
                  {message && (
                    <div className="mt-2 flex items-center text-[10px] font-medium text-red-700 bg-red-100 p-1 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3 w-3 text-red-500"
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
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="min-w-11/12 mx-auto">
        {error && <p className="text-red-600 font-semibold mb-6">{error}</p>}
        <SensorSection heading="Header Sensors" sensors={headerSensors} />
        <SensorSection heading="Separator Sensors" sensors={separatorSensors} />
      </div>
    </div>
  );
};

export default Dashboard;
