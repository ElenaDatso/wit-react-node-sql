import React, { useState } from 'react';
import { Divider, ListItem } from '@mui/material';
import { IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useTasksContext } from '../../context/tasksContext';

export function EditExisting() {
  const {
    taskFieldValue,
    onTaskInputHandler,
    onCanselEditing,
    onSubmitEditing,
  } = useTasksContext();

  console.log('edit');

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
          <IconButton color="primary" onClick={onSubmitEditing}>
            <CheckIcon />
          </IconButton>
          <IconButton color="secondary" onClick={onCanselEditing}>
            <CloseIcon />
          </IconButton>
        </div>
      </ListItem>
      <Divider />
    </>
  );
}
