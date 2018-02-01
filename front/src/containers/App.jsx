import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchPictures } from '../actions/fetch_pictures';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../containers/Home';


class App extends Component {
  componentDidMount() {
    this.props.fetchPictures();
  }

  render() {
    return (
      <Router> 
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPictures }, dispatch);

export default connect(null, mapDispatchToProps)(App);