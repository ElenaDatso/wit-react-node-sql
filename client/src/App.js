import React from 'react';
import './App.scss';
import { Card } from '@mui/material';
import TabsComponent from './components/tabs/TabsComponent';
import TasksList from './components/tasks/TasksList';

function App() {
  return (
    <div className="main-card-wrap">
      <Card style={{display: 'flex', flexDirection: 'column'}}>
        <Card variant={'outlined'} style={{ margin: '2rem', padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
          <TabsComponent />
          <TasksList />
        </Card>
      </Card>
    </div>
  );
}

export default App;
