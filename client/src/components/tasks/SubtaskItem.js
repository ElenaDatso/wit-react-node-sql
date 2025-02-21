import React, { useState } from 'react';
import {
  ListItemText,
  ListItem,
  Checkbox,
  Grow
} from '@mui/material';

function SubtaskItem({subtask, index, ifOpenSubtask}) {
  const [ifFulfilled, setIfFulfilled] = useState(subtask.ifFulfilled);
  return (
    <Grow key={subtask.id} in={ifOpenSubtask} timeout={200 + index * 100}>
      <ListItem>
        <Checkbox checked={ifFulfilled} onClick={() => setIfFulfilled(!ifFulfilled)} />
        <ListItemText primary={subtask.subtaskName} />
      </ListItem>
    </Grow>
  );
}

export default SubtaskItem;
