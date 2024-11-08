const fastify = require('fastify');
const route = fastify();
const Database = require('/MENTORIA DEVINDEV/to-do-node/src/controllers/TaskController');

const taskRoutes = new Database

route.post('/task', async (req, res) => {
    const {title, description, checked} = req.body

    await taskRoutes.createTask({
      title,
      description,
      checked
    })

    return res.status(201).send()

})

route.get('/task', async (req, res) => {
  
})

route.patch('/task/:id', async(req,res) => {
  const {status} = req.params
  const {action} = req.body

  if(action === "ação 1"){
    return { message: 'Executando ação 1 com status ' + status };
  } else if (action === 'acao2') {
    // Lógica para a segunda ação
    return { message: 'Executando ação 2 com status ' + status };
  } else {
    return reply.status(400).send({ error: 'Ação não suportada' });
  }

})


route.delete('/task/:id', async(req,res) => {
  
})

route.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3000,
})