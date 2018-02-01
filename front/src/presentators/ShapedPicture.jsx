import React from 'react';
import styled from 'styled-components';

const PicturePresentation = ({picture: {
  imageUrl,
  title,
  thumbnail
}}) => {
  const finalSizing = '284px';
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
  `;

  const Hexagon = styled.div`
    overflow: hidden;
    visibility: hidden;
    -webkit-transform: rotate(120deg);
       -moz-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
         -o-transform: rotate(120deg);
            transform: rotate(120deg);
    cursor: pointer;
    min-width: 200px;
    width: 200px;
    height: 400px;
    margin-top: -40px;
  `;

  const InnerHexagon1 = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
        -o-transform: rotate(-60deg);
            transform: rotate(-60deg);
  `;

  const InnerHexagon2 = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(${thumbnail});
    visibility: visible;
    -webkit-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
        -o-transform: rotate(-60deg);
            transform: rotate(-60deg);
  `;

  return (
    <Diamond> </Diamond>
  )
}

export default PicturePresentation;