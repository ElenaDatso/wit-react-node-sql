import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function PrioritizeItem({ handleClose, taskId }) {
  const clickHandler = (id) => {
    console.log(id);
    handleClose();
  };
  return (
    <MenuItem onClick={() => clickHandler(taskId)} disableRipple>
      <PriorityHighIcon />
      Prioritize
    </MenuItem>
  );
}

export default PrioritizeItem;
