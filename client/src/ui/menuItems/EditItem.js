import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import { useTasksContext } from '../../context/tasksContext';
function EditItem({ handleClose, taskId }) {
  const {onEditExistingTaskHandler} = useTasksContext();
  const clickHandler = (id) => {
    onEditExistingTaskHandler(id);
    handleClose();
  };
  return (
    <MenuItem onClick={() => clickHandler(taskId)} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
  );
}

export default EditItem