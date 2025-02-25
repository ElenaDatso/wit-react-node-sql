import React from 'react';
import { List, Typography } from '@mui/material';
import TaskItem from './TaskItem';
import { useTabsContext } from '../../context/tabsContext';
import { FilteredTasks } from './filteredTasks';
import NewTaskField from './NewTaskField';
import { useTasksContext } from '../../context/tasksContext';
import InboxIcon from '@mui/icons-material/Inbox';
import { EditExisting } from './EditExisting';

function TasksList() {
  const { activeTab } = useTabsContext();
  const { ifEditExisting, ifAddTaskField } = useTasksContext();

  const tasks = FilteredTasks(activeTab);

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            ifExtendable={task.subtasks.length > 0}
          />
        ))
      ) : (
        <Typography sx={{ margin: 'auto' }} variant="body1" align="center">
          <InboxIcon />
          <br />
          Empty list
        </Typography>
      )}
      {ifAddTaskField && <NewTaskField />}
      {ifEditExisting && <EditExisting />}
    </List>
  );
}

export default TasksList;
