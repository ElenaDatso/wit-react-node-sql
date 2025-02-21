const express = require('express');
const tasks = require('../data/tasks');
const router = express.Router();

router.get('/', (req, res, next) => {
  const tasksList = tasks;
  res.send(tasksList);
  next();
});

router.get('/:id', (req, res, next) => {
  const task = tasks[req.params.id]
  res.send(task);
  next()
})

module.exports = router;