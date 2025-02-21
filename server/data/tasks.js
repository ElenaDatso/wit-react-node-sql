module.exports = {
  1: {
    taskName: 'call Tom',
    fulfilled: false,
    archive: false,
    subtasks: false,
    dueDate: false,
  },
  2: {
    taskName: 'shopping list',
    fulfilled: false,
    archive: false,
    subtasks: [
      {
        subtaskName: 'bananas',
        fulfilled: false,
      },
      {
        subtaskName: 'olives',
        fulfilled: false,
      },
    ],
    dueDate: false,
  },
};