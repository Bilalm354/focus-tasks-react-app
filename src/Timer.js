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
        currentTimer:'Start timer!',
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
            currentTimer:'Stoped'
        });
    }

    pause = () => {
        this.setState({
            timerOn: false,
        });
    }


    render() {
    const {timerTime, completedTimers, currentTimer} = this.state;
    let seconds = ("0"+(timerTime%60)).slice(-2);
    let minutes = ("0"+(Math.floor(timerTime/60))%60).slice(-2);

    return(
        <div className="Timer">
            <div className="Timer-header">
                <h2>{currentTimer}</h2>
            </div>
            <div className="Timer-time">
                <h4>{minutes} : {seconds}</h4>
            </div>
            <div className="Timer-buttons-container">
                {!this.state.timerOn && <button onClick={this.startWorkTimer} className="Timer-btn start-btn">Start Working</button>}
                {!this.state.timerOn && <button onClick={this.startShortBreak} className="Timer-btn start-btn">Start short break</button>}
                {!this.state.timerOn && <button onClick={this.startLongBreak} className="Timer-btn start-btn">Start long break</button>}
                {this.state.timerOn && <button onClick={this.stopTimer} className="Timer-btn stop-btn" >Stop</button>} 
                {/* only see stop button if timer is on */}
            </div>
            <br />
            <div className="Completed Timers">
                Completed Work Timers Today: {completedTimers}
                <div>
                    {'✅'.repeat(completedTimers)}
                </div>
            </div>
        </div>
    )}
}

export default Timer;