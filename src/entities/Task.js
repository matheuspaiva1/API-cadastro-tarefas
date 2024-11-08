const sql = require("../database/db.js")

async function createTable(){
  const query = ` 
  CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(255),
    checked BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`

  try {
    await sql.query(query)
    console.log("Tabela criada com sucesso.");
  } catch (error) {
    console.log("Tabela não criada.", error);
  } finally{
    sql.end();
  }
}

createTable()