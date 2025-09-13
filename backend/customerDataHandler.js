const express = require("express");
const sql = require("mssql");

const app = express();
const port = 3000;

const config = {
  user: "SA",
  password: "Deepu123@",
  server: "localhost",
  database: "MyDB",
  port: 1433,
  options: {
    encrypt: false,
  },
};

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
    "Condensate Stabilizer Outline Temp.": { category: "Test Separator", unit: "°C" },
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

setInterval(async () => {
  try {
    let pool = await sql.connect(config);

    // Step 1: Get latest batch date + time
    const latestBatch = await pool.request().query(`
      SELECT TOP 1 Batch_Date, Batch_Time
      FROM dbo.customerData
      ORDER BY Batch_Date DESC, Batch_Time DESC
    `);

    if (latestBatch.recordset.length === 0) {
      console.log("⚠️ No data found in customerData.");
      return;
    }

    const { Batch_Date, Batch_Time } = latestBatch.recordset[0];

    // Step 2: Get all rows for that batch
    const batchRows = await pool.request()
      .input("Batch_Date", sql.Date, Batch_Date)
      .input("Batch_Time", sql.Time, Batch_Time)
      .query(`
        SELECT * 
        FROM dbo.customerData
        WHERE Batch_Date = @Batch_Date AND Batch_Time = @Batch_Time
      `);

    // Step 3: Merge all rows into one object
    const latestRow = {};
    batchRows.recordset.forEach(row => {
      Object.keys(row).forEach(col => {
        if (row[col] !== null && col !== "Batch_Date" && col !== "Batch_Time") {
          latestRow[col] = row[col];
        }
      });
    });

    // Step 4: Transform into sensor format
    const transformedData = transformSensorData(latestRow);

    // Step 5: Upsert into AllSensors
    for (const sensor of transformedData) {
      await pool.request()
        .input("Category", sql.NVarChar, sensor.Category)
        .input("Sensor", sql.NVarChar, sensor.Sensor)
        .input("Measurement", sql.Float, sensor.Measurement)
        .input("Unit", sql.NVarChar, sensor.Unit)
        .query(`
          MERGE dbo.AllSensors AS target
          USING (SELECT @Sensor AS Sensor) AS source
          ON target.Sensor = source.Sensor
          WHEN MATCHED THEN
            UPDATE SET Measurement = @Measurement
          WHEN NOT MATCHED THEN
            INSERT (Category, Sensor, Measurement, Unit)
            VALUES (@Category, @Sensor, @Measurement, @Unit);
        `);
    }

    console.log(`✅ Synced AllSensors with latest batch (${Batch_Date} ${Batch_Time})`);
  } catch (err) {
    console.error("❌ Error syncing:", err);
  }
}, 10000);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
