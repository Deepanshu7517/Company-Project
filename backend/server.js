const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const firestore = require("./firebase");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

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

// 🔑 Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  if (!token)
    return res.status(401).json({ message: "Authentication token missing" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// ✅ Verify token & return all users
app.get("/users", authenticateToken, async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM Users");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).send("Server Error");
  }
});

// ✅ Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let pool = await sql.connect(config);

    let result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");

    const user = result.recordset[0];
    if (!user || user.Password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.UserID, email: user.Email }, JWT_SECRET, {
      expiresIn: "30m",
    });

    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    console.error("Error during login: ", err);
    res.status(500).send("Server Error");
  }
});

// 🔄 Random SQL update query
const randUpdateSql = `
  UPDATE dbo.HeaderSensors
    SET Measurement = ABS(CHECKSUM(NEWID())) % 1700;
  UPDATE dbo.SeparatorSensors
    SET Measurement = ABS(CHECKSUM(NEWID())) % 1700;
`;


setInterval(async () => {
  try {
    let pool = await sql.connect(config);

    // Fetch all sensors from the combined table
    const result = await pool.request().query("SELECT * FROM dbo.AllSensors");

    const combinedData = {
      sensors: result.recordset, // all sensors in one array
      updatedAt: new Date().toISOString(),
    };

    const singleString = JSON.stringify(combinedData);

    const mainDoc = firestore.collection("sensors").doc("latestData");
    await mainDoc.set({ data: singleString }, { merge: true });

    console.log(
      "🔥 Synced SQL → Firestore as SINGLE STRING at",
      new Date().toLocaleTimeString()
    );
  } catch (err) {
    console.error("❌ Error syncing:", err);
  }
}, 10000);

// 🚀 Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

// e4fe18cf4725
