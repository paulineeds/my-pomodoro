import React from 'react';

const Controls = ({ active, handleReset, handlePlayPause }) => (
  <div className='Controls'> 
    <button id='start_stop' onClick={handlePlayPause}>
      {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}</button>
    <button id='reset' onClick={handleReset}> &#x21BB;</button>
  </div>
)

export default Controls;