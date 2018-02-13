import React, { Component, Fragment } from 'react';
import Lightbox from 'react-image-lightbox';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PictureList from '../presentators/PictureList';

const Layout = styled.div`
  display: grid;
  grid-template: minmax(180px, 20vh) auto / auto;
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
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentPictureIndex: null
    }

    this.onPictureClick = this.onPictureClick.bind(this);
    this.onCloseRequest = this.onCloseRequest.bind(this);
    this.onNextPictureClick = this.onNextPictureClick.bind(this);
    this.onPrevPictureClick = this.onPrevPictureClick.bind(this);
  }

  onPictureClick(currentPictureIndex) {
    this.setState({
      lightboxIsOpen: true,
      currentPictureIndex
    });
  }

  onCloseRequest() {
    this.setState({
      lightboxIsOpen: false
    });
  }

  onNextPictureClick() {
    let { currentPictureIndex } = this.state;

    currentPictureIndex += 1;

    if(currentPictureIndex >= this.props.pictures.length) {
      currentPictureIndex = 0;
    }

    this.setState({currentPictureIndex});
  }

  onPrevPictureClick() {
    let { currentPictureIndex } = this.state;

    currentPictureIndex -= 1;

    if(currentPictureIndex < 0) {
      currentPictureIndex = this.props.pictures.length - 1; 
    }

    this.setState({currentPictureIndex});
  }

  render() { 
    const { lightboxIsOpen, currentPictureIndex } = this.state;
    
    const { pictures } = this.props;

    return ( 
      <Fragment>
        <Layout>
          <div className="header">
            <h1>Lucía Corona</h1>
            <h2>Illustration</h2>
          </div>
          {pictures.length && <PictureList 
            pictures={pictures}
            onPictureClick={this.onPictureClick}
            />}
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

const mapStateToProps = ({pictures}) => ({pictures});

export default connect(mapStateToProps)(Home);