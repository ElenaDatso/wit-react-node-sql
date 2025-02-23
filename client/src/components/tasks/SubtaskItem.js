import React, { useState,
  useEffect
 } from 'react';
import {
  ListItemText,
  ListItem,
  Checkbox,
  Grow
} from '@mui/material';
import { useTasksContext } from '../../context/tasksContext';

function SubtaskItem({taskId, subtask, index, ifOpenSubtask}) {
  const { onSubtaskChengeHandler } = useTasksContext();
  const [ifChecked, setIfChecked] = useState(subtask.fulfilled);

  useEffect(() => {
    subtask.fulfilled = ifChecked;
    onSubtaskChengeHandler(taskId, subtask);
  }, [ifChecked]);

  const onCheckedHandler = () => {
    setIfChecked(!ifChecked)
  }

  return (
    <Grow in={ifOpenSubtask} timeout={200 + index * 100}>
      <ListItem>
        <Checkbox checked={subtask.fulfilled} onChange={onCheckedHandler} />
        <ListItemText primary={subtask.subtaskName} />
      </ListItem>
    </Grow>
  );
}

export default SubtaskItem;
