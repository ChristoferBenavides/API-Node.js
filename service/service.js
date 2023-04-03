const db = require('../db/db.js');

exports.getTabla = (callback) => {
  db.query('SELECT * FROM WALCLTable', (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results.rows);
  });
};

exports.getWalcl = (callback) => {
  db.query('SELECT WALCL FROM WALCLTable', (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results.rows);
  });
};

exports.getDate = (callback) => {
  db.query('SELECT DATE FROM WALCLTable', (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results.rows);
  });
};

exports.postInsert = (date, walcl, callback) => {
  db.query('INSERT INTO WALCLTable (DATE, WALCL) VALUES ($1, $2)', [date, walcl], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};

