import React, { useEffect } from 'react'
import { Update } from './Main'

import background from './textures/background3.jpg'
import speed from './textures/speed.png'
import ship from './textures/Ship.png'
import thrust from './textures/thrust.png'
import logo from './Images/icon2.png'

// Obstacle textures

import NE from './textures/obstacles/NE.png'
import SE from './textures/obstacles/SE.png'
import SW from './textures/obstacles/SW.png'
import NW from './textures/obstacles/NW.png'

import N from './textures/obstacles/N.png'
import E from './textures/obstacles/E.png'
import S from './textures/obstacles/S.png'
import W from './textures/obstacles/W.png'

import NS from './textures/obstacles/NS.png'
import WE from './textures/obstacles/WE.png'

let App = () => {

  useEffect(() => {
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

        <div className="right">
          <div id="course">
            <h3>Next turn:</h3>
            <ul>
              <li id="current-turn"></li>
              <li id="next-turn"></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container">
        <canvas id="ctx" width="1024px" height="768px"></canvas>
        <img src={background} id="background" style={{display: 'none'}}></img>
        <img src={speed} id="speed" style={{display: 'none'}}></img>
        <img src={ship} id="ship" style={{display: 'none'}}></img>
        <img src={thrust} id="thrust" style={{display: 'none'}}></img>

        <img src={NE} id="NE" style={{display: 'none'}}></img>
        <img src={SE} id="SE" style={{display: 'none'}}></img>
        <img src={SW} id="SW" style={{display: 'none'}}></img>
        <img src={NW} id="NW" style={{display: 'none'}}></img>

        <img src={N} id="N" style={{display: 'none'}}></img>
        <img src={E} id="E" style={{display: 'none'}}></img>
        <img src={S} id="S" style={{display: 'none'}}></img>
        <img src={W} id="W" style={{display: 'none'}}></img>

        <img src={NS} id="NS" style={{display: 'none'}}></img>
        <img src={WE} id="WE" style={{display: 'none'}}></img>
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