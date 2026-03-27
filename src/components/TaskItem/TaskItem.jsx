import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";

export const TasksItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <p>{text}</p>
      <button onClick={handleDelete}>x</button>
    </li>
  );
};