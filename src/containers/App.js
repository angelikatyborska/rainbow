import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import WebsiteChooser from '../components/WebsiteChooser';
import PinkSunglasses from '../components/PinkSunglasses';

class App extends Component {
  render() {
    const { location } = this.props;
    const url = (location && location.query && location.query.url) || 'http://angelika.me';
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, left: 0, height: '20px', zIndex: '1' }}>
          <WebsiteChooser {...{ setUrl: this.props.push, url }} />
        </div>
        <PinkSunglasses />
        <iframe
          src={url}
          style={{ width: '100%', height: 'calc(100% - 20px)', overflow: 'scroll', border: '0' }}
        />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
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
