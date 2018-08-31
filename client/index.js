import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Soundz from './components/Soundz'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment><App /> <Soundz playing={true} onFinishedPlaying={() => {}}/></React.Fragment>,
    document.getElementById('app')
  )
})
