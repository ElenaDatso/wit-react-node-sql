const express = require('express');
let tasks = require('../data/tasks');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(tasks);
  next();
});

router.put('/:id', (req, res, next) => {
  const updatedTask = req.body;
  console.log(updatedTask, Number(req.params.id));
  tasks = tasks.map((task) => task.id === Number(req.params.id)? {...task, ...updatedTask } : task );
  res.send(tasks.find((task) => task.id === Number(req.params.id)));
  next();
})

module.exports = router;
