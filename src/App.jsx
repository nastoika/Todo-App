import {useState, useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTodos} from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
    const [text, setText] = useState('');
    const {status, error} = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    };

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div className="App">
            <InputField handleSubmit={addTask} text={text} handleInput={setText}/>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TodoList/>
        </div>
    );
}

export default App;
