import sql from "../database/db.js"

async function createTable(){
  const query = ` 
  CREATE TABLE task (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    checked BOOLEAN,
    createdAt INTEGER,
    updatedAt INTEGER
  );`

  try {
    await sql.query(query)
    console.log("Tabela criada com sucesso.");
  } catch (error) {
    console.log("Tabela não criada.");
  } finally{
    sql.end();
  }
}

createTable()