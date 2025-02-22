import React from 'react';
import {
  ListItemText,
  ListItem,
  Checkbox,
  Grow
} from '@mui/material';
import { useTasksContext } from '../../context/tasksContext';

function SubtaskItem({taskId, subtask, index, ifOpenSubtask}) {
  const { onSubtaskChengeHandler } = useTasksContext();

  return (
    <Grow in={ifOpenSubtask} timeout={200 + index * 100}>
      <ListItem>
        <Checkbox
          checked={subtask.fulfilled}
          onChange={() =>
            onSubtaskChengeHandler(taskId, {
              ...subtask,
              ...(subtask.fulfilled = !subtask.fulfilled),
            })
          }
        />
        <ListItemText primary={subtask.subtaskName} />
      </ListItem>
    </Grow>
  );
}

export default SubtaskItem;
