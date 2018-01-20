import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import BlendChooser from '../components/BlendChooser';
import Rainbow from '../components/Rainbow';

class App extends Component {
  render() {
    const blendMode = this.getBlendMode();

    return (
      <div>
        <Rainbow blendMode={blendMode} />
        <iframe className="iframe" src={this.getUrl()} />
        <div className="footer">
          <BlendChooser blendMode={blendMode} onChange={(v) => this.handleBlendModeChange(v)}/>
        </div>
      </div>
    );
  }


  handleBlendModeChange(value) {
    this.props.push(
      `${this.props.location.pathname}?blendMode=${value}&url=${this.getUrl()}`
    );
  }

  getUrl() {
    const { location } = this.props;
    return (location && location.query && location.query.url) || 'https://angelika.me';
  }

  getBlendMode() {
    const { location } = this.props;
    return (location && location.query && location.query.blendMode) || 'color';
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
