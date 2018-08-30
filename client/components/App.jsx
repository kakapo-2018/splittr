import React from 'react'

import Cell from './Cell'

const App = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const circle = {
    cx: width / 2,
    cy: height / 2,
    level: 0,
    r: 50
  }

  return (
    <svg width={width} height={height}>
      <Cell circle={circle} />
    </svg>
  )
}

export default App
