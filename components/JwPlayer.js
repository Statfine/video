/**
 * Created by eastiming on 16/8/3.
 */
import React, { Component } from 'react';

export default class JwPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setupVideo();
  }

  _handleSeek = () => {
    jwplayer(this.refs.video).seek(10);
  };

  setupVideo(){
    const url = 'http://video.easub.com/6c413a3e-f7c7-4810-b88e-2273381cef52/1470205800458.m3u8';
    //const url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';

    jwplayer(this.refs.video).setup({
      playlist: [{
        sources: [{"file":url,"type":'m3u8'}]
      }],
      width: '400',
      height: '225',
      autostart: true,
      flashplayer: 'http://www.easub.com/plugin/player/jwplayer.flash.swf',
      primary: 'flash',
      controls:true,
      aspectratio: '16:9',
    });
  }

  render(){
    return (
      <div>
        <div ref="video" id="video">Video Jw</div>
        <button onClick={this._handleSeek}>Seek</button>
      </div>
    )
  }

}