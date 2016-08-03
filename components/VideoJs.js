/**
 * Created by eastiming on 16/8/3.
 */
import React, { Component } from 'react';

export default class VideoJs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.initPlayerApi();
  }

  initPlayerApi = () => {
    const rtmp = 'video/*';
    var player = videojs('example-video');
    player.src({
      src: "rtmp://live.hkstv.hk.lxdns.com/live/hks",
      type: rtmp,
      withCredentials: true
    });
    player.play();
  };

  render(){
    const m3u8 = 'application/x-mpegURL';
    const rtmp = 'video/*';

    return (
      <div>
        <p>m3u8</p>
        <video className="video-js vjs-default-skin" controls preload="auto" width="640" height="268"
               data-setup='{}'>
          <source src="http://58.55.127.28/m3u8/cctv5_1800/desc.m3u8" type={m3u8} />
        </video>

        <p>rtmp</p>
        <video className="video-js vjs-default-skin" controls preload="auto" width="640" height="268"
               data-setup='{}'>
          <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type={rtmp} />
        </video>
      </div>
    )
  }

}