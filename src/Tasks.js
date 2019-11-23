import React from 'react';
import './App.css';

const Tasks = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}<button onClick={props.deleteTask}>x</button></li>)
        }
    </ul>

)

export default Tasks;