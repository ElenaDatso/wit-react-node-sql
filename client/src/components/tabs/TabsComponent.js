import React, {useState, useContext} from 'react'
import { Tabs } from '@mui/material';
import TabComponent from './TabComponent';
import { tabsList } from './TabsList';
import { TabsContext } from '../../context/context';

function TabsComponent() {
  const { activeTab, changeTabHandler } = useContext(TabsContext);
  const onClickHandler = (i) => {
    changeTabHandler(i);
  }
  return (
    <Tabs value={activeTab}>
      {tabsList.map((tab, i) => (
        <TabComponent
          key={i}
          value={i}
          label={tab.tabName}
          handler={onClickHandler}
        />
      ))}
    </Tabs>
  );
}

export default TabsComponent;
