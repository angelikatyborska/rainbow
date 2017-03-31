import React from 'react';

export default class SunglassesGlass extends React.Component {
  render() {
    return (
      <svg {...this.props} x="0px" y="0px" viewBox="4.491 26.429 81.881 36.667" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="67.745" cy="44.751" rx="16.372" ry="16.372" style={{fill: this.props.color}}/>
        <ellipse cx="23.75" cy="44.702" rx="16.372" ry="16.372" style={{fill: this.props.color}}/>
      </svg>
    )
  }
}
