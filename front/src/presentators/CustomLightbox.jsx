import React, { Component } from 'react';
import { closeDialog } from 'redux-dialog';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

const Lightbox = styled.div`
  display: none;
`;

class CustomLightbox extends Component {
  render() {
    return (
      <Lightbox>Hello!</Lightbox>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export const CUSTOM_LIGHTBOX = 'Custom Lightbox';
export default CustomLightbox;
