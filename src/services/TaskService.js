import {randomUUID} from 'node:crypto';

class TaskService{
  #tasks = new Map();
  
  createTask(task){
    const taskId = randomUUID();
    this.#tasks.set(taskId, task);
  }

  listTasks (search) {

  }

  updateTask(task){

  }

  updateStatusTask(task){

  }

  deleteTask(task){

  }
}

module.exports = TaskService;