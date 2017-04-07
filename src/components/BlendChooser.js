import React, { Component, PropTypes } from 'react';

export default class BlendChooser extends Component {
  render() {
    return (
      <select
        value={this.props.blendMode}
        onChange={e => this.handleChange(e)}
      >
        <option value="normal">normal</option>
        <option value="multiply">multiply</option>
        <option value="screen">screen</option>
        <option value="overlay">overlay</option>
        <option value="darken">darken</option>
        <option value="lighten">lighten</option>
        <option value="color-dodge">color-dodge</option>
        <option value="color-burn">color-burn</option>
        <option value="hard-light">hard-light</option>
        <option value="soft-light">soft-light</option>
        <option value="difference">difference</option>
        <option value="exclusion">exclusion</option>
        <option value="hue">hue</option>
        <option value="saturation">saturation</option>
        <option value="color">color</option>
        <option value="luminosity">luminosity</option>
      </select>
    );
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }
}

BlendChooser.propTypes = {
  blendMode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
