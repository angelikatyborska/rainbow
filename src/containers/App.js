import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as WebsiteActions from '../actions/WebsiteActions';
import WebsiteChooser from '../components/WebsiteChooser';
import PinkSunglasses from '../components/PinkSunglasses';

class App extends Component {
  render() {
    const {website} = this.props;
    return (
      <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, right: 0, left: 0, height: '20px', zIndex: '1'}}>
          <WebsiteChooser {...{setUrl: this.props.actions.setUrl, url: website}} />
        </div>
        <PinkSunglasses />
        <iframe src={website} style={{width: '100%', height: 'calc(100% - 20px)', overflow: 'scroll', border: '0'}} />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    website: state.website
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(WebsiteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
