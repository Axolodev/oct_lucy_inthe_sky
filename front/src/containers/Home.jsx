import React, { Component, Fragment } from 'react';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import PictureList from '../presentators/PictureList';
import { setPageTitle } from '../utils/functions';
import LoadingText from '../presentators/LoadingText';

const Layout = styled.div`
  display: grid;
  grid-template: 180px auto / auto;
  text-align: center;

  & > .header {
    text-align: center;
    color: #660066;
    
    & > h1 {
      font-size: 3em;
      margin-bottom: 0;
    }

    & > h2 {
      margin: 0;
    }
  }
`;

class Home extends Component {
  state = {
    lightboxIsOpen: false,
    currentPictureIndex: null
  }

  componentDidMount() {
    setPageTitle('Portfolio');
  }

  onPictureClick = (currentPictureIndex) => {
    this.setState({
      lightboxIsOpen: true,
      currentPictureIndex
    });
  }

  onCloseRequest = () => {
    this.setState({
      lightboxIsOpen: false
    });
  }

  onNextPictureClick = () => {
    let { currentPictureIndex } = this.state;
    const pictures = this.props.store.pictures;

    this.setState({currentPictureIndex: (currentPictureIndex + 1) % pictures.length});
  }

  onPrevPictureClick = () => {
    let { currentPictureIndex } = this.state;
    const pictures = this.props.store.pictures;

    this.setState({currentPictureIndex: (currentPictureIndex + pictures.length - 1) % pictures.length});
  }

  render() { 
    const { lightboxIsOpen, currentPictureIndex } = this.state;
    const pictures = this.props.store.pictures;

    return ( 
      <Fragment>
        <Layout>
          <div className="header">
            <h1>Lucía Corona</h1>
            <h2>Illustration</h2>
          </div>
          { pictures.length ? 
            <PictureList 
              pictures={pictures}
              onPictureClick={this.onPictureClick} /> : 
            <LoadingText />}
        </Layout>
        { lightboxIsOpen && (
            <Lightbox
              mainSrc={pictures[currentPictureIndex].imageUrl}
              nextSrc={pictures[(currentPictureIndex + 1) % pictures.length].imageUrl}
              prevSrc={pictures[(currentPictureIndex + pictures.length - 1) % pictures.length].imageUrl}
              mainSrcThumbnail={pictures[currentPictureIndex].thumbnail}
              nextSrcThumbnail={pictures[(currentPictureIndex + 1) % pictures.length].thumbnail}
              prevSrcThumbnail={
                pictures[(currentPictureIndex + pictures.length - 1) % pictures.length].thumbnail
              }
              onCloseRequest={() => this.onCloseRequest()}
              imageTitle={pictures[currentPictureIndex].title}
              imageCaption={pictures[currentPictureIndex].description}
              onMovePrevRequest={() => this.onPrevPictureClick()}
              onMoveNextRequest={() => this.onNextPictureClick()}
            />
          )
        }
      </Fragment>
    );
  }
}

export default observer(Home);