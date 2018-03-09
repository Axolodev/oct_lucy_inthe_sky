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
`;

const TextFixer = styled.div`
  position: relative;
  display: flex;
  
  ${mediaSizeQueries.large`
    width: 20em;
  `}
`;

const Header = styled.div`
  align-items: center;
  text-align: center;
  color: #660066;
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

const OctatumContact = Link.extend`
  position: absolute;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border: 1px solid white;
  top: -1.1em;
  left: 80%;
  z-index: 1;
  padding: 1em;
  padding-top: 2em;
  background-color: #111;
  color: white;
  transition: 0.2s linear all;

  &:hover {
    top: -0.7em;
  }

  ${mediaSizeQueries.small`
    left: 70%;
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

const MiddleDiamondsContainer = styled.div`
  width: 40em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${mediaSizeQueries.small`
    width: auto;
  `}
`;

const LeftDiamondsContainer = MiddleDiamondsContainer.extend`
  position: absolute;
  align-items: left;
  justify-content: center;
  margin-left: 176px;
  -webkit-margin-start: 88px;

  ${mediaSizeQueries.small`
    margin-left: -144px;
    -webkit-margin-start: -72px;
  `}
`;

const Contact = () => {
  setPageTitle('Contact');
  
  return (
    <Layout> 
      <Header>
        <h1>Contact</h1>
      </Header>
      <Container>
        <MiddleDiamondsContainer>
          <TextFixer>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lvcyinthesky/">
              <FacebookDiamond />
            </Link>
            <ParagraphLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lvcyinthesky/">lvcyinthesky</ParagraphLink>
          </TextFixer>
          <TextFixer>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morra_inthesky/">
              <InstagramDiamond />
            </Link>
            <ParagraphLink target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morra_inthesky/">morra_inthesky</ParagraphLink>
          </TextFixer>
        </MiddleDiamondsContainer>
        <LeftDiamondsContainer>
          <TextFixer>
            <Link href="mailto:cyanicdreams@gmail.com">
              <MailDiamond />
            </Link>
            <ParagraphLink href="mailto:cyanicdreams@gmail.com">cyanic.dreams@gmail.com</ParagraphLink>
          </TextFixer>
        </LeftDiamondsContainer>
      </Container>
      <OctatumContact target="_blank" href="https://www.octatum.com">By Octatum</OctatumContact>
    </Layout>
  );
};

export default Contact;