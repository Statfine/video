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

  setupVideo(){
    jwplayer(this.refs.video).setup({
      playlist: [{
        sources: [{"file":'rtmp://live.hkstv.hk.lxdns.com/live/hks',"type":'rtmp'}]
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
      </div>
    )
  }

}