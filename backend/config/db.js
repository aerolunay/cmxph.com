const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "1001_cmx_appdata_recruitment_database_ph", // hardcode OR add to env
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;