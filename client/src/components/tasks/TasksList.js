import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { useTabsContext } from '../../context/tabsContext';
import { FilteredTasks } from './filteredTasks';

function TasksList() {
  const { activeTab } = useTabsContext();

  return (<List>
    {FilteredTasks(activeTab).map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        ifExtendable={task.subtasks.length > 0 && task.subtasks}
      />
    ))}
  </List>);
}

export default TasksList;
