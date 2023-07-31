const mysql = require("mysql");
require('dotenv').config();

const Db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

Db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return;
    }
    console.log('Database connection established successfully.');
  });
  
  Db.on('error', (err) => {
    console.error('Database connection error:', err.message);
  });

module.exports = Db;
