require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOT,
  port: process.env.DB_PORT,
  database: process.env.DB,
});

module.exports = pool;
