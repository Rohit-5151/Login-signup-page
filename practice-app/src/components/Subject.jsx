import React, { useContext } from 'react'
import { ContextData } from './ContextData';

function Subject() {
    const subject = useContext(ContextData);
  return (
    <div style={{backgroundColor: 'pink', padding: '10px'}}>
      <h1>Subject is: {subject}</h1>
    </div>
  )
}

export default Subject
