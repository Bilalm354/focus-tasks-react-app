import React, {Component} from 'react';
import './App.css';

class Timer extends Component {
    state ={
        timerOn: false,
        workTimer: 25*60, // 25 minutes * 60 seconds
        shortBreak: 5*60, // 5 minutes * 60 seconds
        longBreak: 15*60, // 15 minutes * 60 seconds
        timerTime: 0, 
        completedTimers: 0,
        currentTimer:'',
        currentTask:'Tidy up'
    }

    startWorkTimer = () =>{
        this.setState({
            timerOn: true,
            timerTime: this.state.workTimer,
            currentTimer:'Work'
        });
        clearInterval(this.timer); // to stop timer from counting down multiple seconds at a time when you switch between times. 
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 1;
            if (newTime>=0) {
                this.setState({
                    timerTime: newTime,
                })
            }else {
                clearInterval(this.timer);
                this.setState({timerOn: false});
                this.startShortBreak();
                this.setState({
                    completedTimers: this.state.completedTimers + 1,
                })
                alert("Work timer ended. Starting short break.");
            }
        }, 1000)
    };

    startShortBreak = () =>{
        this.setState({
            timerOn: true,
            timerTime: this.state.shortBreak,
            currentTimer:'Short Break'
        });
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 1;
            if (newTime>=0) {
                this.setState({
                    timerTime: newTime,
                })
            }else {
                clearInterval(this.timer);
                this.setState({timerOn: false});
                this.startWorkTimer();
                alert("Short break has ended, back to work");
            }
        }, 1000)
    };

    startLongBreak = () =>{
        this.setState({
            timerOn: true,
            timerTime: this.state.longBreak,
            currentTimer:'Long Break'
        });
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 1;
            if (newTime>=0) {
                this.setState({
                    timerTime: newTime,
                })
            }else {
                clearInterval(this.timer);
                this.setState({timerOn: false});
                this.startWorkTimer();
                alert("Short break has ended, back to work");
            }
        }, 1000)
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({
            timerOn: false,
            currentTimer:''
        });
    }

    pause = () => {
        this.setState({
            timerOn: false,
        });
    }


    render() {
    const {timerTime, completedTimers, currentTimer, currentTask} = this.state;
    let seconds = ("0"+(timerTime%60)).slice(-2);
    let minutes = ("0"+(Math.floor(timerTime/60))%60).slice(-2);

    return(
        <div className="Timer">
            <div className="Timer-header">
                <h2>{currentTask}</h2>
            </div>
            <div className="Timer-time">
                <h4>{minutes} : {seconds}</h4>
            </div>
            <div className="Timer-buttons">
                <button onClick={this.startWorkTimer}>Start Working</button>
                <button onClick={this.startShortBreak}>Start short break</button>
                <button onClick={this.startLongBreak}>Start long break</button>
                <button onClick={this.stopTimer}>Stop</button>
            </div>
            <div className="Completed Timers">
                Completed Work Timers Today: {completedTimers}
                <div>
                {'O '.repeat(completedTimers)}
                </div>
            </div>
        </div>
    )}
}

export default Timer;