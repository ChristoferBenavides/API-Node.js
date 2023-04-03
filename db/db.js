const { Pool } = require("pg");

const pool = new Pool({
    database: "qdb",
    host: "127.0.0.1",
    password: "quest",
    port: 8812,
    user: "admin",
  });

  module.exports = {
    query: (text, params, callback) => {       
      return pool.query(text, params, callback)
    }
  }