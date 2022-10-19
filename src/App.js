import React, { useEffect } from 'react'
import { Setup, Update } from './Main'

import background from './textures/background3.jpg'
import speed from './textures/speed.png'
import ship from './textures/Ship.png'
import thrust from './textures/thrust.png'
import logo from './Images/icon2.png'

// Obstacle textures
import leftDown from './textures/obstacles/leftDown.png'
import leftUp from './textures/obstacles/leftUp.png'
import rightDown from './textures/obstacles/rightDown.png'
import rightUp from './textures/obstacles/rightUp.png'
import straightHorizontal from './textures/obstacles/straightHorizontal.png'
import straightVertical from './textures/obstacles/straightVertical.png'
import terminateDown from './textures/obstacles/terminateDown.png'
import terminateLeft from './textures/obstacles/terminateLeft.png'
import terminateRight from './textures/obstacles/terminateRight.png'
import terminateUp from './textures/obstacles/terminateUp.png'

let App = () => {

  useEffect(() => {
    Setup()
    const interval = setInterval(() => {
      Update()
    }, 16.66)
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
        <img src={speed} id="speed" style={{display: 'none'}}></img>
        <img src={ship} id="ship" style={{display: 'none'}}></img>
        <img src={thrust} id="thrust" style={{display: 'none'}}></img>

        <img src={leftDown} id="leftLeft" style={{display: 'none'}}></img>
        <img src={leftDown} id="rightUp" style={{display: 'none'}}></img>

        <img src={leftUp} id="rightLeft" style={{display: 'none'}}></img>
        <img src={leftUp} id="rightDown" style={{display: 'none'}}></img>

        <img src={rightDown} id="rightRight" style={{display: 'none'}}></img>
        <img src={rightDown} id="leftUp" style={{display: 'none'}}></img>

        <img src={rightUp} id="leftRight" style={{display: 'none'}}></img>
        <img src={rightUp} id="leftDown" style={{display: 'none'}}></img>

        <img src={straightHorizontal} id="straightRight" style={{display: 'none'}}></img>
        <img src={straightHorizontal} id="straightLeft" style={{display: 'none'}}></img>

        <img src={straightVertical} id="straightUp" style={{display: 'none'}}></img>
        <img src={straightVertical} id="straightDown" style={{display: 'none'}}></img>

        <img src={terminateDown} id="terminateDown" style={{display: 'none'}}></img>
        <img src={terminateLeft} id="terminateLeft" style={{display: 'none'}}></img>
        <img src={terminateRight} id="terminateRight" style={{display: 'none'}}></img>
        <img src={terminateUp} id="terminateUp" style={{display: 'none'}}></img>
      </div>

      <div className="footer">
        <div className="left">
          <h3>Controls:</h3>
          <ul>
            <li><strong>Throttle+ :</strong> Left Shift</li>
            <li><strong>Throttle- :</strong> Left Ctrl</li>
            <li><strong>Full Throttle :</strong> Z</li>
            <li><strong>Cut Throttle :</strong> X</li>
            <li><strong>Rotate left :</strong> Left Arrow</li>
            <li><strong>Rotate right :</strong> Right Arrow</li>
            <li><strong>{"Enable SAS (Hold):"}</strong> S</li>
          </ul>
        </div>
        <div className="right">
          <h3>Status:</h3>
          <ul>
            <li><strong>Thrust : </strong><span id="thrust-percent"></span>%</li>
            <li><strong>SAS : </strong><span id="sas"></span></li>
            <li><strong>Velocity : </strong><span id="velocity"></span>m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App