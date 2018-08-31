import React from 'react';
import Sound from 'react-sound';
const tune = './sound/zorba.mp3'
// import songs from '../../public/ambientSound'; //change to actual folder with mp3 file


export default class Soundz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <Sound
          url="./sound/zorba.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} />
      </div>
    );
  }
}
