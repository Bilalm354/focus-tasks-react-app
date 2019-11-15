import React from 'react'

const TaskForm = ({saveTask}) => {
    const [value, setValue] = useState('');
    return (
        <form action="" onSubmit={(event) => {
            event.preventDefault();
            saveToDo(value);
        }};
        >
            <input type="text" placeholder="Add Task" margin="normal" />
        </form>
    
    )}

export default TaskForm;