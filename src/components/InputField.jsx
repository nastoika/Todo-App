const InputField = ({handleSubmit, text, handleInput}) => {
    return (
        <label>
            <input value={text} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}
export default InputField;
