import React from 'react';
import { Tabs } from '@mui/material';
import TabComponent from './TabComponent';
import { tabsList } from './TabsList';
import { useTabsContext } from '../../context/tabsContext';

function TabsComponent() {
  const { activeTab, changeTabHandler } = useTabsContext();
  const onClickHandler = (i) => {
    changeTabHandler(i);
  };
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
