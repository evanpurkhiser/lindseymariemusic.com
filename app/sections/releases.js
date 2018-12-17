import React from 'react';
import styled from 'react-emotion';

const artworkContext = require.context('app/assets/artwork');
const artwork = artworkContext.keys().map(artworkContext);

const Releases = props => (
  <Section>
    <Heading>Releases</Heading>
    <ReleaseGrid>
      {artwork.map(art => (
        <Release src={art} />
      ))}
    </ReleaseGrid>
  </Section>
);

const Section = styled('div')`
  padding: 0 95px;
`;

const Heading = styled('h2')`
  text-transform: uppercase;
  font-size: 20px;
  margin: 0 0 20px;
`;

const Release = styled('img')`
  display: block;
  width: 100%;
  cursor: pointer;
  transition: opacity 100ms linear;
  position: relative;

  :hover {
    transform: scale(1.1);
    opacity: 1 !important;
  }
`;

const ReleaseGrid = styled('div')`
  display: grid;
  width: 500px;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  :hover img {
    opacity: 0.5;
  }
`;

export default Releases;
