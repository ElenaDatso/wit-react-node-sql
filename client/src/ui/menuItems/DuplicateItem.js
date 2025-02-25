import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FileCopyIcon from '@mui/icons-material/FileCopy';

function DuplicateItem({ handleClose, taskId }) {
  const clickHandler = (id) => {
    console.log(id);
    handleClose();
  };
  return (
    <MenuItem onClick={() => clickHandler(taskId)} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
  );
}

export default DuplicateItem