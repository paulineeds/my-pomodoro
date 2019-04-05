import React from 'react';
const Timer = ({ mode, time }) => (
    <div className='Timer'>
      <h2 id='Timer-label'>{mode === 'session' ? 'Session' : 'Break'}</h2>
      <h2 id='time-left'>{time}</h2>
    </div>
  ) 

export default Timer;