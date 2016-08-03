/**
 * Created by eastiming on 16/8/2.
 */
import React, { Component } from 'react';
import AliPlayer from '../components/AliPlayer';
import JwPlayer from '../components/JwPlayer';
import VideoJs from '../components/VideoJs';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectValue: 1,
  };

  handleSelect = (event) => {
    this.setState({selectValue: Number(event.target.value)});
  };

  _renderSelect = () => {
    return (
      <select
        onChange = {this.handleSelect}
      >
        <option value={1}>videoJs</option>
        <option value={2}>阿里播放器</option>
        <option value={3}>JWplayer</option>
      </select>
    )
  };

  _renderPlayer = () => {
    const { selectValue } = this.state;
    switch (selectValue) {
      case 1:
        return (
          <VideoJs />
        );
        break;
      case 2:
        return (
          <AliPlayer />
        );
        break;
      case 3:
        return (
          <JwPlayer />
        );
        break;
    }
  };

  render(){
    return (
      <div>
        <p style={{ textAlign: 'center', fontSize: '24px' }}>VideoPlayer</p>
        <p style={{ textAlign: 'center' }}>videoJs; aliPlayer; JwPlayer</p>
        {this._renderSelect()}
        {this._renderPlayer()}
      </div>
    )
  }

}