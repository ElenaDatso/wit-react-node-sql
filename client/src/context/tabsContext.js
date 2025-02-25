import { useState, createContext, useContext } from 'react';

const TabsContext = createContext();

export const TabsContextProvider = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabHandler = (i) => {
    setActiveTab(i);
  }


  return (
    <TabsContext.Provider value={{ activeTab, changeTabHandler }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  return useContext(TabsContext);
}

