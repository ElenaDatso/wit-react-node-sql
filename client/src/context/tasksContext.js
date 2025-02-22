import React, { useState, useContext, createContext } from 'react';
import { tasksData } from '../components/tasks/tasksData';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState(tasksData);

  const onTasksChangeHandler = (updatedTask) => {
    setTasksList((prevData) => {
      return prevData.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...task, ...updatedTask };
        } else {
          return task;
        }
      });
    });
  };

  const onSubtaskChengeHandler = (taskId, updatedSubtusk) => {
    setTasksList((prevData) => {
      return prevData.map((task) => {
        if (task.id === taskId) {
          task.subtasks.map((subtask) =>
            subtask.id === updatedSubtusk.id ? updatedSubtusk : subtask
          );
        }
        return task;
      });
    });
  };

  return (
    <TasksContext.Provider
      value={{ tasksList, onTasksChangeHandler, onSubtaskChengeHandler }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
