import React from 'react';
import './App.scss';
import { Card } from '@mui/material';
import TabsComponent from './components/tabs/TabsComponent';
import TasksList from './components/tasks/TasksList';
import { TabsContextProvider } from './context/tabsContext';
import { TasksProvider } from './context/tasksContext';
import Adbutton from './ui/AdButton';

function App() {
  return (
    <TabsContextProvider>
      <TasksProvider>
        <div className="main-card-wrap">
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <Card
              variant={'outlined'}
              style={{
                margin: '2rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
              }}
            >
              <TabsComponent />
              <TasksList />
              <Adbutton />
            </Card>
          </Card>
        </div>
      </TasksProvider>
    </TabsContextProvider>
  );
}

export default App;
