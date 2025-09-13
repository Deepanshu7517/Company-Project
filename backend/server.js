const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const dotenv = require("dotenv");
const firestore = require("./firebase");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔧 MS SQL Server config
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// 🔄 Transform function
function transformSensorData(rawData) {
  const transformedData = [];
  const sensorMapping = {
    // Header
    "Well 1 Pressure": { category: "Header", unit: "psi" },
    "Well 2 Pressure": { category: "Header", unit: "psi" },
    "Well 3 Pressure": { category: "Header", unit: "psi" },
    "Well 4 Pressure": { category: "Header", unit: "psi" },
    "Flare Header Pressure": { category: "Header", unit: "psi" },
    "Production Header Pressure": { category: "Header", unit: "psi" },
    "Test Header Pressure": { category: "Header", unit: "psi" },
    "Production Heder Temp.": { category: "Header", unit: "°C" },
    "Test Heder Temp.": { category: "Header", unit: "°C" },
    "Manifold Flare Header DPT": { category: "Header", unit: "psi" },

    // Test Separator
    "PS Inlet Pressure": { category: "Test Separator", unit: "psi" },
    "PS Vessel Pressure": { category: "Test Separator", unit: "psi" },
    "TS Inlet Pressure": { category: "Test Separator", unit: "psi" },
    "TS Vessel Pressure": { category: "Test Separator", unit: "psi" },
    "TS Gas Outlet Pressure": { category: "Test Separator", unit: "psi" },
    "Condesate Vessel Pressure": { category: "Test Separator", unit: "psi" },
    "Effluent Vessel Pressure": { category: "Test Separator", unit: "psi" },
    "Gas Scrubber Vessel Pressure": { category: "Test Separator", unit: "psi" },
    "TS Gas Outlet DPT": { category: "Test Separator", unit: "psi" },
    "TS Condensate Outlet PDM": { category: "Test Separator", unit: "psi" },
    "TS Effluent Outlet TFM": { category: "Test Separator", unit: "psi" },
    "PS Inlet Temp.": { category: "Test Separator", unit: "°C" },
    "PS Vessel Temp.": { category: "Test Separator", unit: "°C" },
    "TS Inlet Temp.": { category: "Test Separator", unit: "°C" },
    "TS Vessel Temp.": { category: "Test Separator", unit: "°C" },
    "TS Gas Outlet Temp.": { category: "Test Separator", unit: "°C" },
    "TS Condensate Outlet Temp.": { category: "Test Separator", unit: "°C" },
    "Condensate Stabilizer Outline Temp.": {
      category: "Test Separator",
      unit: "°C",
    },
    "Effluent Vessel Temp.": { category: "Test Separator", unit: "°C" },
    "Gas Scrubber Vessel Temp.": { category: "Test Separator", unit: "°C" },

    // RTDs
    "RTD-13": { category: "Misc", unit: "°C" },
    "RTD-14": { category: "Misc", unit: "°C" },
    "RTD-15": { category: "Misc", unit: "°C" },
    "RTD-16": { category: "Misc", unit: "°C" },

    // Metering Skid
    "Metering Skid Line 1 DPT": { category: "Metering Skid", unit: "psi" },
    "Metering Skid Line 2 DPT": { category: "Metering Skid", unit: "psi" },
    "Condesate Outline PDM": { category: "Metering Skid", unit: "psi" },
  };

  for (const key in rawData) {
    if (key === "Batch_Date" || key === "Batch_Time") continue;

    const sensorInfo = sensorMapping[key];
    if (sensorInfo) {
      transformedData.push({
        Category: sensorInfo.category,
        Sensor: key,
        Measurement: rawData[key],
        Unit: sensorInfo.unit,
      });
    }
  }

  return transformedData;
}

// 🔄 Sync loop
setInterval(async () => {
  try {
    let pool = await sql.connect(config);

    // ✅ Step 1: Get the latest updated row directly
    const latestRowResult = await pool.request().query(`
      SELECT TOP 1 *
      FROM dbo.customerData
      ORDER BY 
        CAST(Batch_Date AS DATETIME) + CAST(Batch_Time AS DATETIME) DESC
    `);

    if (latestRowResult.recordset.length === 0) {
      console.log("⚠️ No data found in customerData.");
      return;
    }

    const latestRow = latestRowResult.recordset[0];

    // ✅ Step 2: Transform
    const transformedData = transformSensorData(latestRow);

    // ✅ Step 3: Wrap into same structure as before
    const combinedData = {
      sensors: transformedData,
      updatedAt: new Date().toISOString(),
    };
    const singleString = JSON.stringify(combinedData);

    // ✅ Step 4: Push to Firestore
    const mainDoc = firestore.collection("sensors").doc("latestData");
    await mainDoc.set({ data: singleString }, { merge: true });

    console.log(
      `🔥 Synced latest row → Firestore at ${new Date().toLocaleTimeString()}`
    );
  } catch (err) {
    console.error("❌ Error syncing:", err);
  }
}, 10000);

// 🚀 Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
