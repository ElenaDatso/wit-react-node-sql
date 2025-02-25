import React, { useState, useContext, createContext, useEffect } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);
  const [ ifAddTaskField, setIfAddTaskField ] = useState(false);
  const [ taskFieldValue, setTaskFieldValue] = useState('');
  const [ response, setResponse ] = useState(false);
  const [ savedList, setSavedList ] = useState([]);
  const [ ifEditExisting, setEditExisting ] = useState(false);
  const [ curEditingTask, setCurEditingTask ] = useState(null);

  //fetch initail tasks data
  async function fetchData() {
    try {
      const tasks = await fetch('http://localhost:3001/tasks');
      setTasksList(await tasks.json());
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (response) {
      fetchData();
      setResponse(false);
    }
  }, [response]);

  useEffect(() => {
    if (!ifAddTaskField) {
      setTaskFieldValue('');
    }
  }, [ifAddTaskField]);

  useEffect(() => {
    console.log(tasksList);
  }, [tasksList]);

  const onEditTaskHandler = (ifOpen) => {
    setIfAddTaskField(ifOpen);
  }

  const onTaskInputHandler = (inputValue) => {
    setTaskFieldValue(inputValue);
  }

  const onTaskAddHandler = async (taskName) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskName: taskName }),
      });
      const newTask = await response.json();
      if (newTask) {
        setTaskFieldValue('');
        onEditTaskHandler(false);
        setResponse(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

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
      await task.json();
      setResponse(true);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubtaskChengeHandler = async (taskId, updatedSubtusk) => {
    const updatedTask = tasksList.find((task) => task.id === taskId);
    updatedTask.subtasks = updatedTask.subtasks.map((subtask) =>
      subtask.id === updatedSubtusk.id ? updatedSubtusk : subtask
    );

    await onTasksChangeHandler(updatedTask);
  };

  const onDeleteTaskHandler = async (taskId) => {
    try {
      await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'DELETE',
      });
      setResponse(true);
    } catch (e) {
      console.error(e);
    }
  };

const onEditExistingTaskHandler = (taskId) => {
  setEditExisting(true);
  const curTask = tasksList.find((task) => task.id === taskId);
  setSavedList([...tasksList]);

  if (curTask) {
    setCurEditingTask(curTask);
    setTasksList(tasksList.filter((task) => task.id !== taskId));
    onTaskInputHandler(curTask.taskName);
  }
};

const onCanselEditing = () => {
  setEditExisting(false);
  onTaskInputHandler('');
  setTasksList([...savedList]);
  setSavedList([]);
  setCurEditingTask(null);
};

const onSubmitEditing = async () => {
  curEditingTask.taskName = taskFieldValue;
  console.log(curEditingTask);
  await onTasksChangeHandler(curEditingTask);
  setEditExisting(false);
  onTaskInputHandler('');
  setSavedList([]);
  setCurEditingTask(null);
};


  return (
    <TasksContext.Provider
      value={{
        tasksList,
        onTasksChangeHandler,
        onSubtaskChengeHandler,
        onDeleteTaskHandler,
        onEditTaskHandler,
        onTaskInputHandler,
        taskFieldValue,
        ifAddTaskField,
        onTaskAddHandler,
        onEditExistingTaskHandler,
        onCanselEditing,
        ifEditExisting,
        onSubmitEditing,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
