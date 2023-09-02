import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoCompleted} from "../store/todoSlice";

const TodoItem = ({id, completed, title}) => {
    const dispatch = useDispatch();
    const removeTask = () => {
        dispatch(removeTodo({id}));
    }

    const toggleTodoComplete = () => {
        dispatch(toggleTodoCompleted({id}))
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
