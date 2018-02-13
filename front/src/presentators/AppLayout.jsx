import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../containers/Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

import mediaSizeQueries from '../constants/media_queries';

const Layout = styled.div`
  display: grid;

  ${mediaSizeQueries.large`
    grid-template: 100vh / minmax(9vh, 90px) auto;

    & > .navbar {
      grid-row: 1 / -1;
      grid-column: 1 / 2;
    }
  `}

  ${mediaSizeQueries.small`
    grid-template: 90vh 10vh / auto;

    & > .navbar {
      position: fixed;
      bottom: 0;
      height: 10vh;
      width: 100%;
      z-index: 99;
      grid-row: 2 / -1;
      grid-column: 1 / -1;
    }
  `}
`;

const Background = styled.div`
  background: url('/assets/mainBackground.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -100;
`;

const Main = styled.main`
  overflow: hidden;
  height: 100%;

  & > div {
    overflow-y: scroll;
    height: 100%;
  }
`;

const AppLayout = () => (
  <Layout>
    <Background />
    <Navbar />
    <Main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Main>
  </Layout>
);

export default AppLayout;