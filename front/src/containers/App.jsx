import React, { Component } from 'react';
import { fetchPictures } from '../actions/fetch_pictures';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from '../presentators/AppLayout';

class App extends Component {
  componentDidMount() {
    // Fetch pictures just once, on application load
    this.props.fetchPictures();
  }

  render() {
    return (
      <Router> 
        <AppLayout />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPictures }, dispatch);

export default connect(null, mapDispatchToProps)(App);