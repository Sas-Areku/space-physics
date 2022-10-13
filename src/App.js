import Main from './Main'
import React, { useEffect } from 'react'

import background from './textures/background.jpg'

let App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      Main()
    }, 6.95)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <div className="container">
        
        <canvas id="ctx" width="1024px" height="768px"></canvas>
        <img src={background} id="background" style={{display: 'none'}}></img>
      </div>
    </div>
  );
}

export default App