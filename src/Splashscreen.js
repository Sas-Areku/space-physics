import React from 'react'
import splashscreen from './Images/splashscreen.png'

let Splashscreen = () => {

  return (
    <div className="splashscreen">
      <img src={splashscreen} alt="splashscreen"></img>
      <h3>Best played on <strong>!mobile</strong></h3>
    </div>
  );
}

export default Splashscreen