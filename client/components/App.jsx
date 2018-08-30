import React from 'react'

import Circle from './Circle'

const App = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const circle = {
    cx: Math.floor(Math.random()*width),
    cy: Math.floor(Math.random()*height),
    level: 0,
    r: Math.floor(Math.random()*256)
  }

  return (
    <svg width={width} height={height}>
      <Circle circle={circle} />
    </svg>
  )
}

export default App
