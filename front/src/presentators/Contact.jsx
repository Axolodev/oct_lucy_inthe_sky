import React from 'react';
import styled from 'styled-components';

import mediaSizeQueries from '../constants/media_queries';
import { setPageTitle } from '../utils/functions';

const Layout = styled.div`
  display: grid; 

  ${mediaSizeQueries.small`
    grid-template: 100px auto / auto;
  `}
  ${mediaSizeQueries.large`
    grid-template: minmax(100px, 20vh) auto / auto;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  ${mediaSizeQueries.large`
    margin-left: 15vh;
  `}
`;

const TextFixer = styled.div`
  position: relative;
  display: flex;
  
  ${mediaSizeQueries.large`
    width: 500px;
  `}
`;

const Header = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #660066;
`;

const OctatumContact = styled.div`
  position: absolute;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border: 1px solid white;
  left: 3em;
  top: 3em;
  z-index: -1;
  padding: 1em;
  background-color: #111;
  color: white;
  transform: rotate(-90deg);
`;

const Link = styled.a`
  text-decoration: none;
`;

const ParagraphLink = Link.extend`
  margin-left: 1em;
  font-size: 2em;
  align-self: center;
  color: #333;
  z-index: 11;

  ${mediaSizeQueries.small`
    display: none;
  `}
`;

const Diamond = styled.div`
  overflow: hidden;
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;
  margin: 21px;
  transform: rotate(45deg);
  position: relative;
  border: 1px solid #85144b;
  z-index: 10;
  transition: linear 0.4s all;

  &::before {
    content: "";
    position: absolute;
    top: -31px;
    left: -31px;
    transform: rotate(-45deg);
    width: 142%;
    height: 142%;
  }

  &::after {
    position: absolute;
    transform: rotate(-45deg);
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 5em;
    height: 100%;
    width: 100%;
  }
`;

const MiddleFixer = TextFixer.extend`
  position: absolute;
  margin-top: 72px;
  margin-left: -72px;
`;

const PurpleDiamond = Diamond.extend`
  background-color: #85144b;
  color: white;

  &::after {
    font-family: "Font Awesome 5 Brands";
  }
`;

const FacebookDiamond = PurpleDiamond.extend`
  &::after {
    content: "\f39e";
  }
`;

const InstagramDiamond = PurpleDiamond.extend`
  &::after {
    content: "\f16d";    
  }
`;

const MailDiamond = Diamond.extend`
  background-color: white;
  color: #85144b;

  &::after {  
    font-family: "Font Awesome 5 Free";
    font-size: 4em;
    content: "\f0e0";
  }
`;

const Contact = () => {
  setPageTitle('Contact');

  return (
    <Layout> 
      <Header>
        <h1>Contact</h1>
      </Header>
      <Container>
        <TextFixer>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lvcyinthesky">
            <FacebookDiamond />
          </Link>
          <ParagraphLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lvcyinthesky">lvcyinthesky</ParagraphLink>
        </TextFixer>
        <MiddleFixer>
          <Link href="mailto:cyanicdreams@gmail.com">
            <MailDiamond />
          </Link>
          <ParagraphLink href="mailto:cyanicdreams@gmail.com">cyanic.dreams@gmail.com</ParagraphLink>
        </MiddleFixer>
        <TextFixer>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morra_inthesky/">
            <InstagramDiamond />
          </Link>
          <ParagraphLink target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morra_inthesky/">morra_inthesky</ParagraphLink>
        </TextFixer>
      </Container>
      <OctatumContact>Hecho por Octatum</OctatumContact>
    </Layout>
  );
};

export default Contact;