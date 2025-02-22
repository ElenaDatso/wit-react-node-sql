import { useState, createContext, useContext } from 'react';

const TabsContext = createContext();

const TabsContextProvider = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabHandler = (i) => {
    setActiveTab(i);
  }

  const tabsController = {
    activeTab,
    changeTabHandler,
  };

  return <TabsContext.Provider value={tabsController}>{children}</TabsContext.Provider>;
};

const useTabsContext = () => {
  return useContext(TabsContext);
}
export { useTabsContext, TabsContextProvider };
