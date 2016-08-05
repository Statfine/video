/**
 * Created by eastiming on 16/8/3.
 */
import React, { Component } from 'react';

export default class AliPlayer extends Component {
  constructor(props) {
    super(props);
  }

  player;

  componentDidMount() {
    this.initPlayerApi();
  }

  _handleSeek = () => {
    this.player.seek(10);
  };

  initPlayerApi = () => {
    const url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
    //const url = 'http://58.55.127.28/m3u8/cctv5_1800/desc.m3u8';
    //const url = 'http://58.55.127.28/m3u8/cctv5jiaHD_1800/desc.m3u8';
    //const url = 'http://58.55.127.28/m3u8/cctv1HD_1800/desc.m3u8';
    //const url = 'http://video.easub.com/6c413a3e-f7c7-4810-b88e-2273381cef52/1470205800458.m3u8';
    //const url = 'http://video.clip.easub.com/vod-out/hd/5674d2ff-8195-4374-9287-d4d0d5e21f31.mp4';
    //const url = 'http://player.pptvyun.com/svc/m3u8player/pl/0a2dnq6Zp6ehoa-L4K2eoqmVp-ydnq-boqWh.m3u8';

    this.player = new prismplayer({
      id: "J_prismPlayer", // 容器id
      source: url,         // 视频url 支持互联网可直接访问的视频地址
      autoplay: true,      // 自动播放
      width: "800",       // 播放器宽度
      height: "450px"      // 播放器高度
    });
  }

  render(){
    return (
      <div>
        <div style={{ width: '800px', height: '450px', margin: '0 auto' }}>
          <div id='J_prismPlayer' className='prism-player'></div>
        </div>
        <button onClick={this._handleSeek}>Seek</button>
      </div>
    )
  }

}