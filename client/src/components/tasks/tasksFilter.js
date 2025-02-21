import { tasksData } from "./tasksData";

export const filter = (tabInd) => {
  switch (tabInd) {
    case 0:
      return tasksData.filter((task) => task.ifPrioritized);
    case 1:
      return tasksData.filter((task) => !task.fulfilled);
    case 2:
      return tasksData.filter((task) => task.fulfilled);
    case 3:
      return tasksData.filter((task) => !task.ifARchived);
    case 4:
      return tasksData.filter((task) => task.ifARchived);
    default:
      return [];
  }
}