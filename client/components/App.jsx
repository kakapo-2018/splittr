import React from 'react'
import Sound from 'react-sound';

import Circle from './Circle'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {   
      circles:[{
      id:0,
      cx: Math.floor(Math.random()*window.innerWidth ),
      cy: Math.floor(Math.random()*window.innerHeight),
      level: 0,
      r:Math.floor(Math.random()*256),
      color: "red"
    }]}
    this.handleTimer()

    // this.handleClick = this.handleClick.bind(this, props.circle)
    this.handleTimer = this.handleTimer.bind(this)
    // this.createCells = this.createCells.bind(this)
  }

  handleTimer() {
    console.log("Hnadling timer!")
    setInterval(() => {
      timer();
      {this.createCells()}
     console.log(time)

      
    }, 1000)
  
  }

  createCells() {
    console.log("create cell!!")
    let endIndex = this.state.circles.length -1
    let endId = this.state.circles[endIndex].id +1
    // let arr = this.state.circles 
    let newCircle = {
      id: endId,
      cx:Math.floor(Math.random()*window.innerWidth ),
      cy:Math.floor(Math.random()*window.innerHeight),
      level: endId,
      r:Math.floor(Math.random()*256), 
      color: "blue"

    }
    // let test= arr.push({newCircle})
  console.log("State: ",this.state)
    let otherArr = [...this.state.circles, newCircle]
    console.log("test: " + otherArr.length)
    // this.setState(this.state.circles.push(newCircle))
    this.setState({circles: otherArr})
  }

  render(){
  const width = window.innerWidth
  const height = window.innerHeight

  console.log(this.state.circles[0].cx)
    
  return (

    

    <svg width={width} height={height}>
    {
      <circle cx={this.state.circles[0].cx} cy={this.state.circles[0].cy} r={this.state.circles[0].r} fill={this.state.circles[0].color}/>
    }

    {
      this.state.circles.map((circle, i)=>{
        return <circle key={'circle' + i} cx={circle.cx} cy={circle.cy} r={circle.r} fill={circle.color}/>
      })

    }

    </svg>
  )
}
}

let time =0;
function timer(){
    time++;
}

let circle =0;
function create(){
  circle++
}
export default App
