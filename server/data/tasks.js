module.exports = [
  {
    id: 0,
    ifPrioritized: false,
    taskName: 'call Tom',
    fulfilled: false,
    ifARchived: false,
    subtasks: false,
    dueDate: false,
  },
  {
    id: 1,
    ifPrioritized: false,
    taskName: 'shopping list',
    fulfilled: false,
    ifARchived: false,
    subtasks: [
      {
        id: 101,
        subtaskName: 'bananas',
        fulfilled: false,
      },
      {
        id: 102,
        subtaskName: 'olives',
        fulfilled: true,
      },
    ],
    dueDate: false,
  },
  {
    id: 2,
    ifPrioritized: false,
    taskName: 'shopping list',
    fulfilled: false,
    ifARchived: false,
    subtasks: [
      {
        id: 201,
        subtaskName: 'bananas',
        fulfilled: false,
      },
      {
        id: 202,
        subtaskName: 'olives',
        fulfilled: false,
      },
    ],
    dueDate: false,
  },
];