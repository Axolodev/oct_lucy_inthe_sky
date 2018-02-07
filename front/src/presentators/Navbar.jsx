import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';

const Navsection = styled.nav`
  color: white;
  background-color: #660066;
  display: flex;
  justify-content: center;

  ${mediaSizeQueries.large`
    grid-template: 100vh / minmax(9vh, 90px) auto;
    flex-direction: column;  
    padding: 10vh 10px;

    & > .navbar {
      grid-row: 1 / -1;
      grid-column: 1 / 2;
    }
  `}

  & a {
    color: rgba(255, 255, 255, 0.2);
    font-size: 2em;
    flex: 1;
    text-align: center;
    text-decoration: none;
    transition: 0.2s linear all;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    

    ${mediaSizeQueries.large`
      writing-mode: vertical-lr;
      text-orientation: sideways;
      transform: rotate(-180deg);
      &::before {
        content: "";
        display: flex;
        position: absolute;
        width: 3px;
        height: 100%;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.3);
        visibility: hidden;
        transform: scaleY(0);
        transition: all 0.35s ease-in-out 0s;
        border-radius: 5px;
      }
  
      &:hover::before {
        visibility: visible;
        transform: scaleY(1);
      }
    `}
  }
`;

const Navbar = () => (
  <Navsection className="navbar">
    <NavLink activeClassName='active' to="/about">About</NavLink>
    <NavLink activeClassName='active' exact to="/">Portfolio</NavLink>
    <NavLink activeClassName='active' to="/contact">Contact</NavLink>
  </Navsection>
);

export default Navbar;