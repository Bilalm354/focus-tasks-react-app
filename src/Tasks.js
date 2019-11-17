import React from 'react';
import './App.css';

const Tasks = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>

)

export default Tasks;