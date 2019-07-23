// require("dotenv").config();
// var security = require("./security");
// var SQL_PASSWORD = toString(security.sql);

var mysql = require("mysql");

var connection = mysql.createConnection({
  // host: "localhost",
  // port: 3306,
  // user: "root",
  // // password: SQL_PASSWORD,
  // password: "HmYz#4g7p1pH",
  // database: "burgers_db"
  host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ats8xzf6452y8tap",
  password: "ew1k9ao9f9xpu594",
  database: "hk3p5ugfxouy9v75"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
