import {useDispatch} from "react-redux";
import {deleteTodo, toggleStatus} from "../store/todoSlice";

const TodoItem = ({id, completed, title}) => {
    const dispatch = useDispatch();
    const removeTask = () => {
        dispatch(deleteTodo(id));
    }

    const toggleTodoComplete = () => {
        dispatch(toggleStatus(id))
    }

    return (
        <li>
            <input type="checkbox" onChange={toggleTodoComplete} className="checkbox"
                   checked={completed}/>
            <span>{title}</span>
            <span className="delete" onClick={removeTask}>&times;</span>
        </li>
    )
}
export default TodoItem
