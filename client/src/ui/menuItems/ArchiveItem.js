import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ArchiveIcon from '@mui/icons-material/Archive';


function ArchiveItem({ handleClose, taskId }) {

  const clickHandler = (id) => {
    console.log(id);
    handleClose();
  };

  return (
    <MenuItem onClick={() => clickHandler(taskId)} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
  );
}

export default ArchiveItem