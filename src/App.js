import React from 'react';
import './App.css';
import Tasks from './Tasks';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>Focus Tasks</h1>
        </div>
      </header>
      <div className = "Instructions">
        <p>Enter all the tasks you have to complete. Then click start work timer. Complete your tasks in order and mark them as complete. Then move on to the next one. You will work in 25 minute intervals. The timer will tell you to take a short break (5 mins) after every interval of work and a long break (15 mins) after every 4th inerval. </p>
      </div>
      <div className="Tasks">
        <Tasks />
      </div>
      <br/>
      <div className = "Timer">
        <Timer />
      </div>
    </div>
  );
}

export default App;
