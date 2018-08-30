import React from 'react'

import Circle from './Circle'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {   
      circle:[{
      cx: Math.floor(Math.random()*window.innerWidth ),
      cy: Math.floor(Math.random()*window.innerHeight),
      level: 0,
      r:Math.floor(Math.random()*256),
      color: "red"
    }, {
      cx: Math.floor(Math.random()*window.innerWidth ),
      cy: Math.floor(Math.random()*window.innerHeight),
      level: 0,
      r:Math.floor(Math.random()*256),
      color: "red"
    }]}

    // this.handleClick = this.handleClick.bind(this, props.circle)
  }

  render(){
  const width = window.innerWidth
  const height = window.innerHeight

  console.log(this.state.circle[0].cx)

  return (

  

    <svg width={width} height={height}>
    <g>
    <circle cx={this.state.circle[0].cx} cy={this.state.circle[0].cy} r={this.state.circle[0].r} fill={this.state.circle[0].color}/>
    <circle cx={this.state.circle[1].cx} cy={this.state.circle[1].cy} r={this.state.circle[1].r} fill={this.state.circle[1].color}/>
      {/* <Circle circle={this.state.circle} /> */}
      </g>
    </svg>
  )
}
}

export default App
