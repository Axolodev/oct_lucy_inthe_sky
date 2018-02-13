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

  & > .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    
    ${mediaSizeQueries.small`
    `}

    ${mediaSizeQueries.large`
      margin-left: 15vh;
    `}
    
    & .text-fixer {
      position: relative;
      display: flex;
      
      ${mediaSizeQueries.large`
        width: 500px;
      `}

      & p {
        margin-left: 1em;
        font-size: 2em;
        align-self: center;
        color: #333;
        z-index: 11;

        ${mediaSizeQueries.small`
          display: none;
        `}
      }
    }

    & > div:nth-child(2) {
      position: absolute;
      margin-top: 72px;
      margin-left: -72px;

      & > div {
        & div {
          background-color: white;
          color: #85144b;
        }
  
        & div:nth-child(1)::after {
          font-family: "Font Awesome 5 Free";
          font-size: 4em;
          content: "\f0e0";
        }
      }
    }

    & > div.text-fixer {     
      &.facebook div::after {
        font-family: "Font Awesome 5 Brands";
        content: "\f39e";
      }
  
      &.instagram div::after {
        font-family: "Font Awesome 5 Brands";
        content: "\f16d";
      }
  
      & div {
        background-color: #85144b;
        color: white;
      }
    }
  }
`;

const Diamond = styledComponents.div`
    overflow: hidden;
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
    margin: 21px;
    transform: rotate(45deg);
    position: relative;
    border: 1px solid #85144b;
    z-index: 10;
    transition: linear 0.4s all;
    font-family: "Font Awesome 5 Brands";

    &::before {
      content: "";
      position: absolute;
      top: -31px;
      left: -31px;
      transform: rotate(-45deg);
      width: 142%;
      height: 142%;
    }

    &::after {
      position: absolute;
      transform: rotate(-45deg);
      align-items: center;
      justify-content: center;
      display: flex;
      font-size: 5em;
      height: 100%;
      width: 100%;
    }
  `;

const Contact = () => (
  <Layout> 
    <div className="header">
      <h1>Contact</h1>
    </div>
    <div className="content">
      <div className="text-fixer facebook">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lvcyinthesky">
          <Diamond></Diamond>
        </a>
        <p>lvcyinthesky</p>
      </div>
      <div className="middle-diamond">
        <div className="text-fixer">
          <a href="mailto:cyanicdreams@gmail.com">
            <Diamond></Diamond>
          </a>
          <p>cyanicdreams@gmail.com</p>
        </div>
      </div>
      <div className="text-fixer instagram">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morra_inthesky/">
          <Diamond></Diamond>
        </a>
        <p>morra_inthesky</p>
      </div>
    </div>
  </Layout>
);

export default Contact;