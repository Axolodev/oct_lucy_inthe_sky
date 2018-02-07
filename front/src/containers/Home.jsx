import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import { selectPicture } from '../actions/select_picture';
import CustomLightbox from '../presentators/CustomLightbox';
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

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

class Home extends Component {
  render() { 
    return ( 
      <Fragment>
        <Layout>
          <div className="header">
            <h1>Lucía Corona</h1>
            <h2>Illustration</h2>
          </div>
          <FlexRow>
            <PictureList 
              pictures={this.props.pictures}
              onPictureClick={this.props.selectPicture}
              />
          </FlexRow> 
        </Layout>
        <CustomLightbox/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({pictures}) => ({pictures});
const mapDispatchToProps = dispatch => bindActionCreators({ selectPicture }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);