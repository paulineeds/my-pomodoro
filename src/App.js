import React from 'react';
import './App.css';
import Timer from './controllers/Timer/Timer.js'
import Header from './controllers/Header/Header'
import SetTimer from './controllers/SetTimer/SetTimer'
import Controls from './controllers/Controls/Controls'
const moment = require ('moment');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakValue: 10,
      sessionValue: 20,
      mode: 'session',
      time: 25 * 60 * 1000,
      active: false,
      touched: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time === 0 && prevState.mode === 'session'){
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: 'break' })
      this.audio.play()
  }
    if (prevState.time === 0 && prevState.mode === 'break') {
      this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session'})
      this.audio.play()
    }
  }

  handleSetTimers = (inc, type) => {
    if(this.state[type] === 60 && inc) return
    if(this.state[type] === 1 && !inc) return
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1)})
  } 

  handleReset = () => {
    this.setState({ 
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      touched: false,
      active: false })
    clearInterval(this.pomodoro)
    this.audio.pause()
    this.audio.currentTime = 0
  }

  handlePlayPause = () => {
    if (this.state.active) {
      clearInterval(this.pomodoro)
      this.setState({ active: false })
    } else {
      if(this.state.touched) {
        this.pomodoro = setInterval(() => this.setState({ time: this.state.time -1000}), 1000)
        this.setState({active : true})
      } else {
        this.setState({ 
          time: this.state.sessionValue * 60 * 1000,
          touched: true,
          active: true }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time -1000}), 1000))
      }
    }
  }

  render() {
    return (
      <div className="App">
       <Header />

       <div className='blokje'>

        <SetTimer type='session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>

        <div className='timer'>
          <Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
          <Controls active={this.state.active} handlePlayPause={this.handlePlayPause} handleReset={this.handleReset}/>
        </div>
        
        <SetTimer type='break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>

       </div>
        
        <audio
        id='beep'
        src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3'
        ref={el => this.audio =el}
        >
        </audio>
      </div>
    );
  }
}

export default App;