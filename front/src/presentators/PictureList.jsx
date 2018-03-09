import React from 'react';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';
import ShapedPicture from './ShapedPicture';

const minPictureWidth = 215;

const Container = styled.div`
  display: flex;
  position: relative;

  ${mediaSizeQueries.large`
    margin: 0 calc(8vw); 
  `}

  ${mediaSizeQueries.small`
    margin-left: ${10}px;
  `}
`;

const PictureGridDisplay = styled.div`
  display: flex; 
  align-content: flex-start;
  flex-wrap: wrap;
  width: ${minPictureWidth * 4};

  ${mediaSizeQueries.small`
    min-width: ${minPictureWidth}px;
  `}
`;

const SmallGrid = PictureGridDisplay.extend`
  position: absolute;
  ${mediaSizeQueries.large`
    left: ${minPictureWidth / 2}px;
  `}
  
  ${mediaSizeQueries.small`
    left: ${107}px;
  `}
  
  top: ${minPictureWidth / 2}px;
`;

const PictureList = ({pictures, onPictureClick}) => {  
  let halfWayThrough = Math.ceil(pictures.length / 2)
  let arrayFirstHalf = pictures.slice(0, halfWayThrough);
  let arraySecondHalf = pictures.slice(halfWayThrough, pictures.length);

  const makePicture = (picture) => (
    <ShapedPicture 
      key={picture.imageUrl} 
      index={picture.index}
      picture={picture} 
      onClick={onPictureClick}/>
  );
  
  const largeRenderedPictures = arrayFirstHalf.map(picture => makePicture(picture));
  const shortRenderedPictures = arraySecondHalf.map(picture => makePicture(picture));

  return (
    <Container>
      <PictureGridDisplay>
        {largeRenderedPictures}
      </PictureGridDisplay>
      <SmallGrid>
        {shortRenderedPictures}
      </SmallGrid>
    </Container>
  );
}

export default PictureList;