import React from 'react';
import styled from 'styled-components';

// Final size is about 213px for each diamond.
const Diamond = styled.div`
  overflow: hidden;
  min-width: 150px;
  min-height: 150px;
  width: 150px;
  height: 150px;
  margin: 31px;
  transform: rotate(45deg);
  position: relative;
  border: 1px solid #85144b;
  cursor: pointer;
  z-index: 10;
  transition: linear 0.4s all;

  &::before {
    content: "";
    position: absolute;
    top: -31px;
    left: -31px;
    transform: rotate(-45deg);
    transition: 0.3s ease-in-out all;
    width: 142%;
    height: 142%;
    background: url(${props => props.thumbnail});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
  }

  &:hover::before {
    transform: rotate(-45deg) scale(1.1);

  }
`;

const HoverableSpan = styled.span`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #996699;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    transition: ease-in-out 0.4s all;
  }

  &::after {
    left: 100%;
    top: -100%;
  }

  &::before {
    left: -100%;
    top: 100%;
  }

  &:hover::after,
  &:hover::before {
    left: 0;
    top: 0;
    transform: rotate(360deg);
  }
`;

const PicturePresentation = ({picture, onClick, index}) => (
  <Diamond 
    onClick={() => onClick(index)}
    thumbnail={picture.thumbnail}>
    <HoverableSpan />
  </Diamond>  
)
export default PicturePresentation;