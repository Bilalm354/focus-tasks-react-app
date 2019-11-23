// task list inspired by https://github.com/aghh1504/simple-react-todo-list/
import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      term:'',
      items:[],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <div className="App-title">
              <h1>Focus Tasks</h1>
            </div>
          </header>
          <div className = "Instructions">
            {/* <p>Enter all the tasks you have to complete. Then click start work timer. Complete your tasks in order and mark them as complete. Then move on to the next one. You will work in 25 minute intervals. The timer will tell you to take a short break (5 mins) after every interval of work and a long break (15 mins) after every 4th inerval. </p> */}
          </div>
          <div className="Tasks">
            <form onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} placeholder="Task"/>
            </form>
            <div className="items">
              <Tasks items={this.state.items}/>
            </div>
          </div>
          <br/>
          <div className = "Timer">
            <Timer />
          </div>
        </div>
      </div>

  )};
}

export default App;
