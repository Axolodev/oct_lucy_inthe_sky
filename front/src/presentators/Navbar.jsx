import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';

const pulseAnimation = keyframes`
  0%, 40%, 60%, 100%, {
    transform: translate(-50%, -50%) scale(1);      
  }

  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const Navsection = styled.nav`
  color: white;
  background-color: #660066;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  ${mediaSizeQueries.large`
    flex-direction: column;  
    padding: 10vh 0;
  `}

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, white, transparent);
    transition: width .2s ease, height .2s ease;
    transform: translate(-50%, -50%);    
    opacity: 0.5;
    animation: ${pulseAnimation} 2s infinite;
  }

  &:hover::before {
    --size: 100px;
  }
`;


const StyledLink = styled(NavLink)`
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

  &.active {
    color: white;

    &::before {
      background-color: white;
    }
    &::after {
      opacity: 0.3;
    }
  }

  &::after {
    content: "";
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s ease-in all;
    z-index: -1;
  }

  ${mediaSizeQueries.large`
    writing-mode: ${props => props.firefox ? 'horizontal' : 'vertical-lr'};
    text-orientation: sideways;
    transform: rotate(-180deg);
    -moz-transform: rotate(0);
    
    &::before {
      content: "";
      display: flex;
      position: absolute;
      width: 3px;
      height: 100%;
      bottom: 0;
      ${props => props.firefox ? 'right: 0':'left:0'};
      background-color: rgba(255, 255, 255, 0.5);
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
`;

let reference = null;

const mouseMoveHandler = e => {  
  const x = e.screenX - (e.screenX - e.pageX);
  const y = e.screenY - (e.screenY - e.pageY);
  reference.style.setProperty('--x', `${ x }px`)
  reference.style.setProperty('--y', `${ y }px`)
};

const Navbar = () => {
  // Hay un bug con firefox que impide usar flexbox + vertical-lr. El layout cambia cuando
  // el usuario usa este browser.
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  return (
    <Navsection 
      onMouseMove={mouseMoveHandler} 
      innerRef={input => reference = input}
      className="navbar">
      <StyledLink firefox={isFirefox} activeClassName='active' to="/about">About</StyledLink>
      <StyledLink firefox={isFirefox} activeClassName='active' exact to="/">Portfolio</StyledLink>
      <StyledLink firefox={isFirefox} activeClassName='active' to="/contact">Contact</StyledLink>
    </Navsection>
  )
};

export default Navbar;