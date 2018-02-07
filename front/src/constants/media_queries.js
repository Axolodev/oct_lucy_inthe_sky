import styled, { css } from 'styled-components';

const queries = {
  large: "(min-width: 48em)",
  small: "(max-width: 47.99em), (orientation: portrait)"
}

// Build media queries for each scren size
const media = Object.keys(queries).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${queries[label]} {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;