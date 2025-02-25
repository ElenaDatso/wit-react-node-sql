import { useTasksContext } from '../../context/tasksContext';

export const FilteredTasks = (tabInd) => {
  const { tasksList } = useTasksContext();
  switch (tabInd) {
    case 0:
      return tasksList.filter((task) => !task.fulfilled);
    case 1:
      return tasksList.filter((task) => task.fulfilled);
    case 2:
      return tasksList.filter((task) => !task.ifARchived);
    default:
      return [];
  }
}