import React, { useState } from 'react';
import {
  Divider,
  ListItemText,
  ListItem,
  Checkbox,
  ListItemButton,
  List,
  Collapse
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SubtaskItem from './SubtaskItem';
import { useTasksContext } from '../../context/tasksContext';

function TaskItem({ task, ifExtendable }) {
  const { tasksList, onTasksChangeHandler } = useTasksContext();

  const [openSubtasks, setOpenSubtasks] = useState(false);

  const onExtendHandler = () => {
    setOpenSubtasks(!openSubtasks);
  };
  const onCheckMarkHandler = () => {
    task.fulfilled = !task.fulfilled;
    onTasksChangeHandler(task);
  }
  return (
    <>
      <ListItem key={task.id}>
        <Checkbox checked={task.fulfilled} onClick={onCheckMarkHandler} />
        <ListItemText primary={task.taskName} />
        {ifExtendable && (
          <ListItemButton style={{ flexGrow: 0 }} onClick={onExtendHandler}>
            {openSubtasks ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        )}
      </ListItem>
      <Collapse in={openSubtasks} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }}>
          {ifExtendable &&
            tasksList[task.id].subtasks.map((subtask, index) => (
              <SubtaskItem
                key={index}
                subtask={subtask}
                index={index}
                ifOpenSubtask={openSubtasks}
                taskId={task.id}
              />
            ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );
}

export default TaskItem;
