import React from 'react';
import SunglassesRims from './SunglassesRims';
import SunglassesGlass from './SunglassesGlass';

export default class PinkSunglasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0};
  }
  render() {
    /// Sunglasses by Icon Island from the Noun Project

    // or

    // Sunglasses by Persheid from the Noun Project
    const width = 500;
    const height = 300;

    const style = {
      width: width,
      height: height,
      position: 'absolute',
      top: this.state.y - (height / 2),
      left: this.state.x - (width / 2),
    };
    return (
      <div
        onMouseMove={e => this.setState({x: e.pageX, y: e.pageY})} // TODO: move to onMove over iframe
        style={{width: '100%', height: '100%', position: 'absolute'}}
      >
        <svg style={Object.assign({mixBlendMode: 'color'}, style)}>
          <SunglassesGlass color="#f442bc"/>
        </svg>
        <svg style={Object.assign({mixBlendMode: 'darken'}, style)}>
          <SunglassesGlass color="#fcc2ea"/>
        </svg>
        <svg style={Object.assign({mixBlendMode: 'lighten'}, style)}>
          <SunglassesGlass color="#4c133a"/>
        </svg>
        <svg style={Object.assign({mixBlendMode: 'normal'}, style)}>
          <SunglassesRims />
        </svg>
      </div>
    );
  }
}
