import React, { Component, PropTypes } from 'react';

export default class WebsiteChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.url };
  }

  // TODO: automatic url expand? form booming-games.com to http://booming-games.com

  // TODO: X-Frame-Options ???
  render() {
    return (
      <form onSubmit={e => {e.preventDefault(); this.props.setUrl(this.state.url);}}>
        <input type="text" value={this.state.url} onChange={e => this.setState({ url: e.target.value })} />
      </form>
    );
  }
}
