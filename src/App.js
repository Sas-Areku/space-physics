import Main from './Main'
import React, { useEffect } from 'react'

let App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      Main()
    }, 16.67)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <canvas id="ctx" width="1024px" height="768px"></canvas>
      </div>
    </div>
  );
}

export default App