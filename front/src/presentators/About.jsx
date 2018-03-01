import React from 'react';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';
import { setPageTitle } from '../utils/functions';

const Layout = styled.div`
  display: grid; 

  & > .content {
    text-align: justify;
    font-size: 1.5em;
    padding-bottom: 3em;
    color: #111;

    & p:first-of-type {
      margin-top: 0;
    }
  }

  & > .picture {
    grid-row: 2 / -1;
    grid-column: 2 / -1;
    background-size: contain cover;
    background-repeat: no-repeat;
    background-image: url('${process.env.PUBLIC_URL}/assets/portrait.jpg');
    background-position: center top;
  }

  ${mediaSizeQueries.large`
    grid-template: minmax(100px, 20vh) auto / 49% 49%;
    grid-gap: 10px 2%;
    padding: 0 10vw;   
  `}

  ${mediaSizeQueries.small`
    grid-template: minmax(100px, 20vh) minmax(400px, 40vh) auto / auto;

    & > .picture {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
      margin: 0 1.5em;
      background-size: cover;
    }

    & > .content {
      margin: 1em;
    }
  `}

  & > .header {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #660066;
  }
`;

const About = () => {
  setPageTitle('About');
  
  return (
    <Layout> 
      <div className="header">
        <h1>About</h1>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius fringilla tortor nec tempor. Curabitur fermentum rhoncus quam eget pharetra. Sed viverra nec magna in mollis. Praesent vestibulum nisl a leo rhoncus, lacinia tempus ligula sodales. Curabitur pellentesque est non dapibus fringilla. In hac habitasse platea dictumst. Curabitur elementum posuere molestie. Nullam eros lectus, pulvinar vel fermentum vitae, bibendum nec mi.</p>
        <p>Nulla maximus dictum urna, a blandit enim egestas ut. Quisque a nisi porta, ultrices felis nec, commodo leo. Fusce lacinia dui elit, nec porttitor arcu lacinia nec. Vestibulum rhoncus, arcu eu tincidunt sollicitudin, urna libero rhoncus velit, in aliquam lacus felis facilisis libero. Donec at congue nisl. Nunc nec felis quis augue consectetur lobortis. Vestibulum leo diam, sagittis eget pharetra ac, auctor at magna.</p>
        <p>Praesent convallis dolor vitae hendrerit feugiat. Donec at aliquam quam. Ut fringilla magna non ante ullamcorper sodales. Maecenas a hendrerit augue. Maecenas non sem ut neque accumsan sollicitudin vel ac velit. Aenean egestas molestie leo, quis consequat tellus egestas a. Mauris vitae tellus in erat congue fringilla. Donec eget arcu quam. Sed placerat semper euismod. Aliquam erat quam, dictum nec scelerisque id, tristique in quam. Nullam vel quam volutpat augue commodo porttitor quis ut mi.</p>
        <p>Praesent gravida bibendum odio, ac cursus erat cursus vitae. Duis sagittis eleifend pharetra. Donec a nibh aliquam, tempor nibh eget, placerat lorem. Duis ante urna, dapibus eu enim ultrices, pretium commodo ex. Donec in accumsan purus, sed ultricies risus. Pellentesque ullamcorper libero at efficitur mattis. Phasellus lacinia quis urna eu blandit. Duis vehicula quis mauris nec hendrerit.</p>
        <p>Nulla sed quam ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent ut commodo massa, eu consequat lectus. Phasellus volutpat, mi ut lacinia fermentum, erat neque viverra nisl, ac euismod lorem ligula et lorem. Aliquam feugiat quis leo ut cursus. Nam ut posuere lorem. Morbi nec nunc dignissim, elementum lorem ut, porta risus. Donec in congue turpis. In venenatis mauris quis metus aliquet, sit amet volutpat purus tempus. Vivamus vitae enim eget eros tempus viverra. In imperdiet quam dui, vel dictum tortor facilisis at.</p>
      </div>
      <div className="picture">

      </div>
    </Layout>
  )
};

export default About;