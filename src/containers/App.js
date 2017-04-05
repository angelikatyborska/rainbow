import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import WebsiteChooser from '../components/WebsiteChooser';
import Rainbow from '../components/Rainbow';

class App extends Component {
  render() {
    const { location } = this.props;
    const url = (location && location.query && location.query.url) || 'http://angelika.me';
    const blend = (location && location.query && location.query.blend) || 'color';
    return (
      <div>
        <div style={{ position: 'absolute', top: 0, right: 0, left: 0, height: '20px', zIndex: '1' }}>
          <WebsiteChooser {...{ setUrl: this.props.push, url }} />
        </div>
        <Rainbow blend={blend} />
        <iframe
          src={url}
          style={{ width: '100%', height: '100%', border: '0' }}
        />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
