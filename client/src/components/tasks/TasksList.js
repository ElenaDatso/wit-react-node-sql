import React from 'react'
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { tasksData } from './tasksData';

function TasksList() {

  return (
      <List>
        {tasksData.map((task) => (
          <TaskItem
            key={task.id}
            text={task.taskName}
            ifExtendable={task.subtasks.length > 0 && task.subtasks}
          />
        ))}
      </List>
  );
}

export default TasksList;
