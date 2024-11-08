const {randomUUID} = require('node:crypto')
const sql = require('../database/db');


class TaskController{
  async createTask(task){
    const taskId = randomUUID()
    const {title, description, checked} = task

    await sql.query(`
      insert into task (id, title, description, checked) VALUES (${taskId}, ${title}, ${description}, ${checked})
    `)
    
  }

  async listTasks(){

  }

  async updateTask(){

  }

  async updateStatusTask(){

  }

  async deleteTask(){

  }
}
module.exports = TaskController;
