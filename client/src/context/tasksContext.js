import React, { useState, useContext, createContext, useEffect } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);

  //fetch initail tasks data
  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await fetch('http://localhost:3001/tasks');
        setTasksList(await tasks.json());
      } catch (e) {
        console.error(e);
        return [];
      }
    }
    fetchData();
  }, []);

  const onTasksChangeHandler = async (updatedTask) => {
    try {
      const task = await fetch(
        `http://localhost:3001/tasks/${updatedTask.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        }
      );
      const response = await task.json();
      console.log(response);
      setTasksList((prevData) => {
        return prevData.map((task) => {
          if (task.id === response.id) {
            return { ...task, ...response };
          } else {
            return task;
              }
            });
          });
        } catch (e) {
          console.error(e);
        }
  };

  const onSubtaskChengeHandler = (taskId, updatedSubtusk) => {
    console.log(updatedSubtusk);
      const updatedTask = tasksList.find((task) => task.id === taskId);
      updatedTask.subtasks = updatedTask.subtasks.map((subtask) =>
        subtask.id === updatedSubtusk.id ? updatedSubtusk : subtask
      );;

    console.log(updatedTask)
    onTasksChangeHandler(updatedTask);
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
