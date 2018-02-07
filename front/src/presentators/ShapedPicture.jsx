import React from 'react';
import styled from 'styled-components';

const PicturePresentation = ({picture, onClick}) => {
  const { thumbnail } = picture;
  // Final size is about 284px for each diamond.
  const Diamond = styled.div`
    overflow: hidden;
    min-width: 200px;
    width: 200px;
    min-height: 200px;
    margin: 41px;
    height: 200px;
    transform: rotate(45deg);
    position: relative;
    border: 1px solid #85144b;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: -42px;
      left: -42px;
      transform: rotate(-45deg);
      width: 142%;
      height: 142%;
      background: url(${thumbnail});
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
      onClick={() => onClick(picture)}
    ></Diamond>
  )
}
export default PicturePresentation;