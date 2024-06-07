const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Check if all required environment variables are set
const requiredEnvVars = [
  "PGUSER",
  "PGHOST",
  "PGDATABASE",
  "PGPASSWORD",
  "PORT",
];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Error: Missing required environment variable ${envVar}`);
    process.exit(1);
  }
});

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(
  cors({
    origin: "https://shopnest-8qfn.onrender.com",
    optionsSuccessStatus: 200,
  })
);

// Endpoint to handle contact form submission
app.post("/api/contact", async (req, res) => {
  const { username, mail, phnumber, message } = req.body;
  console.log(username, mail, phnumber, message);

  try {
    await pool.query(
      "INSERT INTO contacts (username, mail, phnumber, message) VALUES ($1, $2, $3, $4)",
      [username, mail, phnumber, message]
    );
    res.status(201).send("Contact saved");
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
