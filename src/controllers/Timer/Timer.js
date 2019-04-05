import React from 'react';
const Timer = ({ mode, time }) => (
    <div className='Timer'>
      {/* <h3 id='Timer-label'>{mode === 'session' ? 'Session' : 'Break'}</h3> */}
      <h3 id='time-left'>{time}</h3>
    </div>
  ) 

export default Timer;