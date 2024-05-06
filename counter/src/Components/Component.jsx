import React from 'react'

import "./Component.css"

function Component() {
  return (
    <div>
        <h1>Counter app</h1>
    <div className='buttons'>
        <button type='onlclick'>+</button>
        <button type='onlclick'>-</button>
    </div>
<div className='play'>
    <button type='onclick'>PLAY</button>
    <button type='onclick'>PAUSE</button>
    <button type='onclick'>STOP</button>
</div>

    </div>
  )
}

export default Component;
