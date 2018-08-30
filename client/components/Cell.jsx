import React from 'react'

import { getColor } from '../color'

class Cell extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      children: []
      
    }

    this.createCells = this.createCells.bind(this, props.circle)
  }

  createCells (eventedCircle) {
 
    
    const children = []
    const { cx, cy, r } = eventedCircle
    const level = eventedCircle.level + 1

    children.push({
      cx: width / 2,
      cy: height / 2,
      level: 0,
      r: 50
    }
    )

    this.setState({children})
  }

  render () {
    const { cx, cy, r, level } = this.props.circle
    const color = getColor(level)

    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill={color}/>
        {this.state.children.map((circle, i) => {
          return <Cell key={i} circle={circle} />
        })}
      </g>
    )
  }
}


let time = 0;
function timer(){

   time++;
  //  let sw = document.getElementById('app')
  //  sw.innerHTML = time
}

setInterval(() => {
    timer();
    {this.createCells()}
   console.log(time)
    
}, 1000)


export default Cell

