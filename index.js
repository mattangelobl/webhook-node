const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");
const port = 5000;


const app = express();

app.use(cors());

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { username, email, password, createdAt, updatedAt } = req.body;

  db.query(
    "INSERT INTO practice (username, email, password, createdAt, updatedAt) VALUES (?,?,?,?,?)",
    [username, email, password, createdAt, updatedAt],
    (err, result) => {
      if (err) {
        console.error("Error during signing up:", err.message);
        res.status(500).json({
          message: "An error occurred during register",
        });
      } else {
        console.log("Sign up completed");
        res.status(201).json({ message: "User Successfully Registered" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Running server on ${port}`);
});
