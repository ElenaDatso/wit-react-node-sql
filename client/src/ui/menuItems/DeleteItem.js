import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useTasksContext } from '../../context/tasksContext';
function DeleteItem({ handleClose, taskId }) {

  const {onDeleteTaskHandler} = useTasksContext();

  const clickHandler = (id) => {
    onDeleteTaskHandler(id);
    handleClose();
  }
  return (
    <MenuItem onClick={() => clickHandler(taskId)} disableRipple>
      <RemoveCircleIcon />
      Delete
    </MenuItem>
  );
}

export default DeleteItem;
