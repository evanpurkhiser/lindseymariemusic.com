import WaveSurfer from 'wavesurfer.js';
import React from 'react';

import audioFile from '../audio/ONESEVENTY35.mp3';
import audioData from '../audio/ONESEVENTY35.json';

export default class Waveform extends React.Component {
  constructor() {
    super();
    this.element = React.createRef();
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: this.element.current,
      normalize: true,
      barGap: 1,
      barWidth: 1,
      height: 80,
      cursorWidth: 0,
    });

    fetch(audioData)
      .then(d => d.json())
      .then(json => this.wavesurfer.load(audioFile, json.data));
  }

  render() {
    return <div className={this.props.className} ref={this.element} />;
  }
}
