import React from 'react';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';
import { setPageTitle } from '../utils/functions';

const Layout = styled.div`
  display: grid; 

  ${mediaSizeQueries.large`
    grid-template: minmax(100px, 20vh) auto / 49% 49%;
    grid-gap: 10px 2%;
    padding: 0 10vw;   
  `}

  ${mediaSizeQueries.small`
    grid-template: minmax(100px, 20vh) minmax(400px, 40vh) auto / auto;
  `}
`;

const Header = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #660066;
`;

const Content = styled.div`
  text-align: justify;
  font-size: 1.5em;
  padding-bottom: 3em;
  color: #111;

  & p:first-of-type {
    margin-top: 0;
  }

  ${mediaSizeQueries.small`      
    margin: 1em;
  `}
`;

const Picture = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  background-size: contain cover;
  background-repeat: no-repeat;
  background-image: url('${process.env.PUBLIC_URL}/assets/portrait.jpg');
  background-position: center top;

  ${mediaSizeQueries.small`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    margin: 0 1.5em;
    background-size: cover;
  `}
`

const About = ({store: {description}}) => {
  setPageTitle('About');
  
  return (
    <Layout> 
      <Header>
        <h1>About</h1>
      </Header>
      <Content dangerouslySetInnerHTML={(() => ({__html: description}))()} />
      <Picture />
    </Layout>
  )
};

export default About;