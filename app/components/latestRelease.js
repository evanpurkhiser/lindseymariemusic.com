import React from 'react';
import styled from 'react-emotion';

const LatestRelease = ({ className, ...props }) => (
  <div className={className}>
    <Artwork src="https://f4.bcbits.com/img/a1697872586_16.jpg" />
    <Info>
      <strong>Still Into You (feat Daniel Harte)</strong>
      <br /> Now available on{' '}
      <a href="https://lindseymariemusic.bandcamp.com/track/still-into-you-feat-daniel-harte">
        Bandcamp
      </a>
    </Info>

    <div style={{ gridArea: 'p' }}>
      <PlayerWrapper>
        <Player
          src="https://bandcamp.com/EmbeddedPlayer/track=4075136898/size=small/bgcol=ff0000/linkcol=da6da1/artwork=none/transparent=true/"
          allow="encrypted-media"
          allowFullScreen
        />
      </PlayerWrapper>
    </div>
  </div>
);

const Artwork = styled('img')`
  width: 100%;
  border-radius: 2px;
  grid-area: a;
`;

const Info = styled('p')`
  font-size: 0.9rem;
  line-height: 1.3;
  margin: 0;
`;

const PlayerWrapper = styled('div')`
  margin: -1px;
  overflow: hidden;
  grid-area: p;
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 10px,
    #fefefe 10px,
    #fefefe 20px
  );
`;

const Player = styled('iframe')`
  border: none;
  width: calc(100% + 2px);
  height: 42px;
  display: block;
  margin: -1px;
`;

export default styled(LatestRelease)`
  position: relative;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 1fr max-content;
  grid-template-areas: 'a i' 'a p';
  grid-gap: 12px;
  border-radius: 4px;
  padding: 10px;
  background: #f8f3f2;
  color: #6f6a6c;

  :before {
    content: 'Newest Single';
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 6px;
    border-radius: 2px;
    color: #fff;
    background: #f1a8b9;

    @media screen and (max-width: 400px) {
      display: none;
    }
  }
`;
