import {randomUUID} from 'node:crypto';
const sql = require('../database/db');


export class TaskController{
  async createTask(task){
    const taskId = randomUUID()
    const {title, description, checked, createdAt, updatedAt} = task

    await sql.query(`
      insert into task (id, title, description, checked, createdAt, updatedAt) VALUES (${taskId}, ${title}, ${description}, ${checked}, ${createdAt}, ${updatedAt})
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
