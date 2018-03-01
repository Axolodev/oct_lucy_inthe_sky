import React, { Component } from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #660066;
  font-size: 3em;
  margin-top: -180px;

  & > :nth-child(${props => props.child}) {
    transform: scale(2) translateY(-1em);
    color: white;
  }
`;

const LoadingLetter = styled.span`
  transition: 450ms ease-in-out all, color 200ms linear;
`;

const loadingText = "Loading...";

const LoadingDomText = (loadingText).split("").map((letter, index) => (
  <LoadingLetter key={index} class={`letter${index}`}>{letter}</LoadingLetter>
));

class LoadingText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    }

    this.timer = this.timer.bind(this);
  }

  timer() {
    const step = (this.state.step + 1) % (loadingText.length + 1);
    this.setState({step});
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 150);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Loading child={this.state.step}>
        {LoadingDomText}
      </Loading>
    );
  }
}

export default LoadingText;