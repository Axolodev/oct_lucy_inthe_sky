import React, { Component } from 'react';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';
import ShapedPicture from './ShapedPicture';
import { throttle } from '../utils/functions';

const minPictureWidth = 215;

class PictureList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listWidth: -1,
      largePictureList: [],
      shortPictureList: []
    };

    this.updateDimensions = throttle(this.updateDimensions.bind(this), 100);
    this.remakeLists = this.remakeLists.bind(this);
  }

  remakeLists(newPicturesAllowed) {
    const { pictures } = this.props;
    let magicNumber = newPicturesAllowed * 2 - 1;

    if(magicNumber === 1) {
      magicNumber = 2;
    }

    const arraySplitPosition = Math.floor(pictures.length / magicNumber) * newPicturesAllowed + (pictures.length % magicNumber);

    this.setState({
      largePictureList: pictures.slice(0, arraySplitPosition),
      shortPictureList: pictures.slice(arraySplitPosition)
    });
  }

  updateDimensions(force = false) {
    this.setState({
      listWidth: this.pictureArea.offsetWidth
    });

    let newPicturesAllowed = Math.floor(this.pictureArea.offsetWidth / minPictureWidth);
    let previousPicturesAllowed = Math.floor(this.state.listWidth / minPictureWidth);

    if(previousPicturesAllowed !== newPicturesAllowed || force) {
      this.remakeLists(newPicturesAllowed);
    }
  }
  
  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions(true);
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let picturesAllowed = Math.floor(this.state.listWidth / minPictureWidth);
    if(picturesAllowed === 1) {
      picturesAllowed = 1.5;
    }

    let calc = picturesAllowed * minPictureWidth;
    let margin = Math.abs(Math.floor((window.innerWidth -  minPictureWidth *1.5) / 2));

    console.table({picturesAllowed, minPictureWidth, width: window.innerWidth, calc, margin})
    
    const PictureGridDisplay = styled.div`
      display: flex; 
      align-content: flex-start;
      flex-wrap: wrap;
      position: relative;
      
      ${mediaSizeQueries.large`
        padding: 0 ${(this.state.listWidth % minPictureWidth) / 2}px;
        margin: 0 calc(8vw); 
      `}

      ${mediaSizeQueries.small`
        margin-left: ${margin}px;
      `}
    `;
    const SmallGrid = styled.div`
      position: absolute;
      display: flex; 
      align-content: flex-start;
      flex-wrap: wrap;
      max-width: calc(100% - ${minPictureWidth}px);
      width: 90%;
      margin: ${minPictureWidth / 2 - 1}px;
      height: 100%;
    `;

    const makePicture = (picture, index) => (
      <ShapedPicture 
      key={picture.imageUrl} 
      index={index}
      picture={picture} 
      onClick={this.props.onPictureClick}
      />
    );
    
    
    const largeRenderedPictures = this.state.largePictureList.map((picture, index) => makePicture(picture, index));
    const shortRenderedPictures = this.state.shortPictureList.map((picture, index) => makePicture(picture, index));

    return (
      <PictureGridDisplay innerRef={input => {this.pictureArea = input}}>
        {largeRenderedPictures}
        <SmallGrid>
          {shortRenderedPictures}
        </SmallGrid>
      </PictureGridDisplay>
    );
  }
};

export default PictureList;