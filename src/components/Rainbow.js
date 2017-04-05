import React from 'react';

export default class Rainbow extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    };

    const wrapperStyle = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
    };

    return (
      <div style={wrapperStyle}>
        <svg style={{ ...style, mixBlendMode: this.props.blend }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#dd0024" offset="0%"/>
              <stop stopColor="#dd7d00" offset="20%"/>
              <stop stopColor="#ffda0c" offset="40%"/>
              <stop stopColor="#39e006" offset="60%"/>
              <stop stopColor="#06b0e0" offset="80%"/>
              <stop stopColor="#4e0dbf" offset="100%"/>
            </linearGradient>
          </defs>
          <rect fill="url(#gradient)" x="0" y="0" width="100%" height="100%"/>
        </svg>
      </div>
    );
  }
}
