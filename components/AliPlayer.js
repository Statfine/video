/**
 * Created by eastiming on 16/8/3.
 */
import React, { Component } from 'react';

export default class AliPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initPlayerApi();
  }

  initPlayerApi = () => {
    //const url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
    const url = 'http://58.55.127.28/m3u8/cctv5_1800/desc.m3u8';
    //const url = 'http://58.55.127.28/m3u8/cctv5jiaHD_1800/desc.m3u8';
    //const url = 'http://58.55.127.28/m3u8/cctv1HD_1800/desc.m3u8';

    const player = new prismplayer({
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
      </div>
    )
  }

}