import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { selectPicture } from '../actions/index';
import ShapedPicture from '../presentators/ShapedPicture';

const Background = styled.div`
  background: url('/assets/mainBackground.jpg');
  background-size: cover;
  repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -100;
`;

const Container = styled.div`
  max-width: 100vw;
`;

const FlexRow = styled.div`
  display: flex;
  padding: 0 10vw;
  flex-wrap: wrap;
`;

class Home extends Component {
  renderPictureList() {
    return this.props.pictures.map(picture => (
      <ShapedPicture key={picture.imageUrl} picture={picture}/>
    ));
  }

  render() { 
    return ( 
      <Container>
        <Background />
        <FlexRow>
          {this.renderPictureList()}
        </FlexRow> 
      </Container>
    );
  }
}

const mapStateToProps = ({pictures}) => ({pictures});

const mapDispatchToProps = dispatch => bindActionCreators({ selectPicture }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);