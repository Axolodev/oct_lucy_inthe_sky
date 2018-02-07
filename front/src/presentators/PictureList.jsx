import React from 'react';
import ShapedPicture from './ShapedPicture';

const PictureList = ({pictures, onPictureClick}) => {
  const renderedPictures = pictures.map(picture => (
    <ShapedPicture 
      key={picture.imageUrl} 
      picture={picture} 
      onClick={onPictureClick}
      />
  ));

  return renderedPictures;
};

export default PictureList;