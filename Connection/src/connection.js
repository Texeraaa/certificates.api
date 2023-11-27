const mysql = require("mysql");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
let db;
try {
  db = mysql.createPool({
    host: DB_HOST,
    port: PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  });
} catch (error) {
  console.log(`Houve um erro inesperado`, error);
}

module.exports = db;
