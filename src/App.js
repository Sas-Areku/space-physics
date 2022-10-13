import React, { useEffect } from 'react'
import Main from './Main'
import {thrustPercent} from './Ship'

import background from './textures/background.jpg'
import ship from './textures/Ship.png'
import logo from './Images/icon2.png'

let App = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      Main()
    }, 16.67)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <div className="header">
        <img src={logo}></img>
        <h2>Space Physics</h2>
      </div>
      
      <div className="container">
        <canvas id="ctx" width="1024px" height="768px"></canvas>
        <img src={background} id="background" style={{display: 'none'}}></img>
        <img src={ship} id="ship" style={{display: 'none'}}></img>
      </div>

      <div className="footer">
        <div className="left">
          <h3>Controls:</h3>
          <ul>
            <li><strong>Throttle +:</strong> L Shift</li>
            <li><strong>Throttle -:</strong> L Ctrl</li>
            <li><strong>Full Throttle:</strong> Z</li>
            <li><strong>Cut Throttle:</strong> X</li>
            <li><strong>Rotate left:</strong> Left Arrow</li>
            <li><strong>Rotate right:</strong> Right Arrow</li>
          </ul>
        </div>
        <div className="right">
          <h3>Status:</h3>
          <ul>
            <li><strong>Thrust: </strong><span id="thrust-percent"></span>%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App