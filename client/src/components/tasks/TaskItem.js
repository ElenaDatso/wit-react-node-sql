import React, { useState } from 'react';
import {
  Divider,
  ListItemText,
  ListItem,
  Checkbox,
  ListItemButton,
  List,
  Collapse
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SubtaskItem from './SubtaskItem';

function TaskItem({ id, text, ifExtendable }) {
  const [openSubtasks, setOpenSubtasks] = useState(false);

  const onExtendHandler = () => {
    setOpenSubtasks(!openSubtasks);
  };
  return (
    <>
      <ListItem key={id}>
        <Checkbox />
        <ListItemText primary={text} />
        {ifExtendable && (
          <ListItemButton style={{ flexGrow: 0 }} onClick={onExtendHandler}>
            {openSubtasks ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        )}
      </ListItem>
      <Collapse in={openSubtasks} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }}>
          {ifExtendable &&
            ifExtendable.map((subtask, index) => (
              <SubtaskItem subtask={subtask} index={index} ifOpenSubtask ={openSubtasks} />
            ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );
}

export default TaskItem;
