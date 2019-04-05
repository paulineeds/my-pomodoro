import React from 'react';

const SetTimer = ({ type, value, handleClick }) => (
    <div className='SetTimer'>
     <div id={`${type}-label`}>{type === 'session' ? 'Session' : 'Break'}</div>
       <div className='SetTimer-controls'>
         <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&#8722;</button>
         <h2 id={`${type}-length`}>{value}</h2>
         <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&#43;</button>
       </div>
   </div>
 )

 export default SetTimer;