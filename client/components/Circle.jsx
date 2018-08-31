import React from 'react'

import { getColor } from '../color'

class Circle extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      children: []
    }

    this.handleClick = this.handleClick.bind(this, props.circle)
  }

  handleClick(eventedCircle) {
    const children = []
    const { cx, cy, r } = eventedCircle
    const level = eventedCircle.level + 1

    children.push(
      { cx: Math.floor(Math.random() * cx), cy: Math.floor(Math.random() * cy), r: Math.floor(Math.random() * r), level }, // north
      { cx: Math.floor(Math.random() * cx), cy: Math.floor(Math.random() * cy), r: Math.floor(Math.random() * r), level }, // south
      { cx: Math.floor(Math.random() * cx), cy: Math.floor(Math.random() * cy), r: Math.floor(Math.random() * r), level }, // east
      { cx: Math.floor(Math.random() * cx), cy: Math.floor(Math.random() * cy), r: Math.floor(Math.random() * r), level }  // west
    )

    this.setState({ children })
  }

  render() {
    const { cx, cy, r, level } = this.props.circle
    const color = getColor(level)

    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill={color} onMouseOver={this.handleClick} />
        {this.state.children.map((circle, i) => {
          return <Circle key={i} circle={circle} />
        })}
      </g>
    )
  }
}


let time = 0;
function timer() {
  time++;
}

setInterval(() => {
  timer();

}, 1000)

export default Circle

