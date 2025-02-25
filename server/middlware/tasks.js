const express = require('express');
let tasks = require('../data/tasks');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(tasks);
  next();
});

router.post('/', (req, res, next) => {
  const newTask = {
    id: Math.floor(Math.random() * 100000),
    taskName: req.body.taskName || 'not set',
    ifPrioritized: false,
    fulfilled: false,
    ifARchived: false,
    subtasks: [],
    dueDate: null,
  };

  tasks.push(newTask);
  res.status(201).json(newTask); // Лучше отправлять JSON и статус 201
});

router.put('/:id', (req, res, next) => {
  const updatedTask = req.body;
  console.log(updatedTask, Number(req.params.id));
  tasks = tasks.map((task) => task.id === Number(req.params.id)? {...task, ...updatedTask } : task );
  res.send(tasks.find((task) => task.id === Number(req.params.id)));
  next();
})

router.delete('/:id', (req, res, next) => {
  const indexToDelete = tasks.findIndex((task) => task.id === Number(req.params.id));
  tasks.splice(indexToDelete, 1);
  res.send('Successfully deleted');
  next();
})
module.exports = router;
