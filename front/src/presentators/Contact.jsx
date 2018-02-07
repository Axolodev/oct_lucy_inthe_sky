import React from 'react';
import styledComponents from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';

const Layout = styledComponents.div`
  display: grid; 

  ${mediaSizeQueries.small`
    grid-template: 100px auto / auto;
  `}
  ${mediaSizeQueries.large`
    grid-template: minmax(100px, 20vh) auto / auto;
  `}

  & > .header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #660066;
  }
`;

const Diamond = styledComponents.div`
    overflow: hidden;
    min-width: 200px;
    width: 200px;
    min-height: 200px;
    margin: 41px;
    height: 200px;
    transform: rotate(45deg);
    position: relative;
    border: 1px solid #85144b;

    &::before {
      content: "";
      position: absolute;
      top: -42px;
      left: -42px;
      transform: rotate(-45deg);
      width: 142%;
      height: 142%;
    }
  `;

const Contact = () => (
  <Layout> 
    <div className="header">
      <h1>Contact</h1>
    </div>
    <div className="content">
    </div>
  </Layout>
);

export default Contact;