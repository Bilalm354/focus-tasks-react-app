import React from 'react';
import './App.css';
import Tasks from './Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Focus Tasks</div>
      </header>
      <div className="Tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
