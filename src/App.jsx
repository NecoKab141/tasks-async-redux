import './App.css';
import { TaskForm } from "./components/TaskForm/TaskForm.jsx";
import { TasksList } from "./components/TaskList/TaskList.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations.js";


export const App = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filters.status);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
        <TaskForm />
        <Filter />
        <TasksList tasks={filteredTasks} />
    </div>
  );
};