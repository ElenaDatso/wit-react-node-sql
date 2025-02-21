import React, {useState} from 'react'
import { Tabs } from '@mui/material';
import TabComponent from './Tab';
import { tabsList } from './TabsList';

function TabsComponent() {
  const [activeTabVal, setActiveTabVal] = useState(0);
  const onClickHandler = (i) => {
    setActiveTabVal(i);
  }
  return (
    <Tabs value={activeTabVal}>
      {tabsList.map((tab, i) => (
        <TabComponent key={i} value={i} label={tab} handler={onClickHandler} />
      ))}
    </Tabs>
  );
}

export default TabsComponent;
