import React from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTasksContext } from '../context/tasksContext';

const PlusButton = ({ onClick }) => {
  const { onEditTaskHandler } = useTasksContext();
  return (
    <IconButton
      color="primary"
      onClick={() => onEditTaskHandler(true)}
      sx={{ borderRadius: 0 }}
    >
      <AddIcon />
    </IconButton>
  );
};

export default PlusButton;
