const express = require('express');
let tasks = require('../data/tasks');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(tasks);
  next();
});

router.put('/:id', (req, res, next) => {
  const updatedTask = req.body;
  tasks = tasks.map((task) => task.id === req.params.id ? {...task, ...updatedTask} : task);
  console.log(tasks.find((task) => (task.id === req.params.id)));
  res.send(tasks.find(task => task.id = req.params.id));
  next();
})

module.exports = router;
