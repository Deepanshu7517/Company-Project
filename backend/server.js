const express = require("express");
// This is where we create our app
const sql = require("mssql");
// Here is the sql we ar eusning to connect to the database
const cors = require("cors");
// ors is mostly usedd to make the application cross origin in terms or url for example a server is running at localhost:4000 we caonnecrt our frontend tp the server at localhost:5000  basically it is an gateway used for authentication
const jwt = require("jsonwebtoken");
// Here we imported the json web token
const dotenv =require("dotenv")

const firestore = require("./firebase");


dotenv.config();

const app = express();
// here we made the app
app.use(cors());
// Here we said to use the cors in our app
app.use(express.json());
// Here we said that the app should use json for parsing request bodies

// Secret key for JWT (⚠️ put in .env for production)
const JWT_SECRET = process.env.JWT_SECRET;

// MS SQL Server connection config
const config = {
  user: process.env.DB_USER,
  // This is the username of the server
  password: process.env.DB_PASS,
  // This is the password to access the server
  server: process.env.DB_SERVER,
  // The server is currently running at localhost
  database: process.env.DB_NAME,
  // This is the name of the database
  port: Number(process.env.DB_PORT),
  // This is the port where the database is running
  options: {
    encrypt: false, // disable for local
    trustServerCertificate: true, // allow self-signed cert
  },
};
// This config will tell the express which server to target

// Middleware to check for a valid JWT
const authenticateToken = (req, res, next) => {
  // This is a middleware which will check if the user is allowed to access a specified url

  const authHeader = req.headers["authorization"];
  // This variable authHeader contains the requested header by the client and returns a boolean value

  const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"
  // token variable contains first check the condition and then set the value first it check if the authHeader is true and if true then it splits the string and takes the second part which is the token

  if (!token) {
    // If their is no token then
    return res.status(401).json({ message: "Authentication token missing" });
    // TIT will return a response status 401 and put json with it as Authtication token missing
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    // This jwt.verify method takes three arguments
    // 1. the token it self to verify thte token we need a token
    if (err) {
      // if their is any error
      return res.status(403).json({ message: "Invalid token" });
      // then it will return the response status as 403 and the json message as invalid token
    }
    req.user = user;
    // if the requested user is equal to the user in the callback then it will perform the next task
    next();
  });
};

// ✅ API: Verify token & get all users
app.get("/users", authenticateToken, async (req, res) => {
  // This api will fetch all users from the database and verify the token, It measurely takes two three arguments.
  // 1. the users url
  // 2. the authentication token
  // 3. the async callback function with two arguments

  try {
    let pool = await sql.connect(config);
    // Here we first wait for the sql to connect to the config we made earlier which contains all the information
    let result = await pool.request().query("SELECT * FROM Users");
    // This result variable will wait for the value intil the pool is connected and the query is executed
    res.json(result.recordset);
    // this will make the response in json format with the recordset from the result
    // console.log(result.recordset);
  } catch (err) {
    // If any error occur then
    console.error("Error: ", err);
    // it will console.log the error
    res.status(500).send("Server Error");
    // Here we sent the response as status 500 and tell the server error
  }
});

// ✅ API: Login
app.post("/api/login", async (req, res) => {
  // Here we post the login credentials coming from the frontend to the /api/login and give it an async callback function having two arguments request and response
  try {
    const { email, password } = req.body;
    // At first it checks if the email and password are provided in the request body

    let pool = await sql.connect(config);
    // HHere we pool the database connection using the config

    let result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM Users WHERE Email = @email");
    // The result variable contains the pool request and the input object of the request contains two arguments the email and the sql.varchar, email

    const user = result.recordset[0];
    // Pick the first row (the user) If no matching user, user will be undefined.

    if (!user || user.Password !== password) {
      // If no user found, or the stored user.Password does not equal the provided password, respond:
      return res.status(401).json({ message: "Invalid email or password" });
      // HTTP 401 Unauthorized (client-level auth failure)
      // A JSON body { message: "Invalid email or password" }
      // return stops the function so no further code runs.
    }

    const token = jwt.sign({ id: user.UserID, email: user.Email }, JWT_SECRET, {
      // jwt.sign(payload, secret, options) creates a token:
      expiresIn: "30m",
      // Payload here: { id: user.UserID, email: user.Email }
      // Signed with your JWT_SECRET.
      // Token expires in 50 seconds (expiresIn: "50s").
    });

    res.status(200).json({ token, message: "Login successful" });
    // Responds with HTTP 200 OK and a JSON object containing the token and a message.
    // Client receives the token and typically stores it (e.g., localStorage.setItem("authToken", token) or, better, an HttpOnly cookie).
  } catch (err) {
    // FI their is any error
    console.error("Error during login: ", err);
    // we console.log it
    res.status(500).send("Server Error");
    // and send the response as server error
  }
});

// ✅ API: Header sensors
app.get("/api/header-sensors", authenticateToken, async (req, res) => {
  // This sets up an HTTP GET endpoint at /api/header-sensors.
  // When a client makes a request to this route, Express will:
  // First run the middleware function authenticateToken.
  // This checks if the user has a valid JWT (JSON Web Token) in the request header.
  // If invalid or missing → request is denied.
  // If authentication succeeds → run the async callback (req, res) => {...}.

  try {
    let pool = await sql.connect(config);
    // Connects to your SQL Server database using the configuration (config).
    // await ensures the code waits until the connection is established before moving on.
    // The pool object represents the active connection.

    const result = await pool
      .request()
      .query(
        "SELECT Id, Sensor, Measurement, Unit FROM dbo.HeaderSensors ORDER BY Id"
      );
    // Creates a new SQL request with pool.request().
    // Executes a SQL query on your database.
    // This query fetches all rows from the HeaderSensors table, selecting only the columns:
    // Id
    // Sensor
    // Measurement
    // Unit
    // ORDER BY Id → ensures results are sorted by the Id column.

    res.json(result.recordset);
    // result.recordset contains the array of rows returned from SQL Server.
    // res.json(...) sends this data as a JSON response back to the client.

    // [
    //   { "Id": 1, "Sensor": "TempSensor", "Measurement": 25, "Unit": "°C" },
    //   { "Id": 2, "Sensor": "HumiditySensor", "Measurement": 40, "Unit": "%" }
    // ]
  } catch (err) {
    console.error("Error fetching header sensors:", err);
    res.status(500).send("Server Error");
  }
});

// ✅ API: Separator sensors
app.get("/api/separator-sensors", authenticateToken, async (req, res) => {
  // This app api get the data from the ms sql server which takes three arguments
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(
        "SELECT Id, Sensor, Measurement, Unit FROM dbo.SeparatorSensors ORDER BY Id"
      );
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching separator sensors:", err);
    res.status(500).send("Server Error");
  }
});

// Random DB updates every 10s (for demo/test)
const randUpdateSql =
  // This stores a multi-line SQL query string inside a JavaScript constant.
  // Later, this string can be executed with .query(randUpdateSql) using your SQL connection.
  `
  UPDATE dbo.HeaderSensors
    SET Measurement = ABS(CHECKSUM(NEWID())) % 1700;
  UPDATE dbo.SeparatorSensors
    SET Measurement = ABS(CHECKSUM(NEWID())) % 1700;
`;
// This updates the Measurement column in every row of the table HeaderSensors.
// The value being set is generated using a random formula:
// NEWID()
// Generates a brand-new unique identifier (GUID) in SQL Server.
// Example: B5A29D63-77B1-4D7E-B2B1-8AE5D7F67B53
// CHECKSUM(NEWID())
// Converts that GUID into a number (can be negative or positive).
// ABS(...)
// Takes the absolute value (removes negative sign, so always positive).
// % 1700
// Takes the remainder when divided by 1700.
// Final value will always be in the range 0 → 1699.
// ✅ Meaning: each row’s Measurement is set to a random integer between 0 and 1699.

setInterval(async () => {
  try {
    let pool = await sql.connect(config);
    await pool.request().query(randUpdateSql);
    console.log("✅ DB sensor values updated in Local server");
  } catch (err) {
    console.error("❌ Error updating sensors:", err);
  }
}, 1000);

setInterval(async () => {
  try {
    let pool = await sql.connect(config);

    // 1. Update SQL data randomly
    await pool.request().query(randUpdateSql);
    console.log("✅ DB sensor values updated in SQL");

    // 2. Fetch HeaderSensors
    let headerResult = await pool.request().query("SELECT * FROM dbo.HeaderSensors");
    let separatorResult = await pool.request().query("SELECT * FROM dbo.SeparatorSensors");

    // Convert recordset to string
    const headerData = JSON.stringify(headerResult.recordset);
    const separatorData = JSON.stringify(separatorResult.recordset);

    // 3. Push to Firestore as ONE document
    const mainDoc = firestore.collection("sensors").doc("latestData");

    await mainDoc.set(
      {
        headerSensors: headerData,
        separatorSensors: separatorData,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

    console.log("🔥 Synced SQL → Firestore at", new Date().toLocaleTimeString());
  } catch (err) {
    console.error("❌ Error syncing:", err);
  }
}, 10000);



// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
