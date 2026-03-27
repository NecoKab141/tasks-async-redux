import { TasksItem } from "../TaskItem/TaskItem.jsx";

export const TasksList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TasksItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </ul>
  );
};