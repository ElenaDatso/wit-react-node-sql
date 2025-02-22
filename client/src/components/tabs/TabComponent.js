import React from 'react';
import { Tab } from '@mui/material';

function TabComponent({value, label, handler}) {
  return <Tab value={value} label={label} onClick={() => handler(value)} />;
}

export default TabComponent;
