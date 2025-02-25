import React, { useState } from 'react';
import {
  Divider,
  ListItem
} from '@mui/material';
import { IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useTasksContext } from '../../context/tasksContext';

function TaskItem() {
  const {
    taskFieldValue,
    onTaskInputHandler,
    onEditTaskHandler,
    onTaskAddHandler,
  } = useTasksContext();

  return (
    <>
      <ListItem key={Math.random()}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextField
            value={taskFieldValue}
            onChange={(e) => onTaskInputHandler(e.target.value)}
            size="small"
            autoFocus
          />
          <IconButton
            color="primary"
            onClick={() => onTaskAddHandler(taskFieldValue)}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => onEditTaskHandler(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </ListItem>
      <Divider />
    </>
  );
}

export default TaskItem;
