import React from 'react';
import styled from 'styled-components';

const PicturePresentation = ({picture, onClick, index}) => {
  const { thumbnail } = picture;
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
      width: 142%;
      height: 142%;
      background: url(${thumbnail});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color: white;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: #996699;
      opacity: 0.7;
      left: 100%;
      top: -100%;
      width: 100%;
      height: 100%;
      transition: linear 0.25s all;
    }

    &:hover::after {
      left: 0;
      top: 0;
    }
  `;

  return (
    <Diamond 
      onClick={() => onClick(index)}
    ></Diamond>
  )
}
export default PicturePresentation;