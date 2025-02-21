import React, {useContext} from 'react'
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { useTabsContext } from '../../context/context';
import { filter } from './tasksFilter';

function TasksList() {
  const {activeTab} = useTabsContext();

  return (
    <List>
      {filter(activeTab).map((task) => (
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
