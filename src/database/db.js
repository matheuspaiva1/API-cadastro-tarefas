// db.js
const { Pool } = require('pg');

const sql = new Pool({
  user: 'root',   
  host: 'localhost',             
  database: 'to-do', 
  password: 'paiva0007',         
  port: 5432,                    
});

module.exports = sql;