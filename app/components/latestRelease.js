import React from 'react';
import styled from 'react-emotion';

class LatestRelease extends React.Component {
  state = { data: null };

  loadTracks = () =>
    fetch('https://lindseymariemusic.com/tracks-proxy')
      .then(resp => resp.text())
      .then(text => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, 'text/html');
        const data = JSON.parse(
          htmlDocument.documentElement.querySelector('#pgBd .music-grid')
            .attributes['data-initial-values'].value
        );
        this.setState({ data });
      });

  componentDidMount() {
    this.loadTracks();
  }

  render() {
    const { data } = this.state;

    if (data === null || data.length === 0) {
      return null;
    }

    const { className } = this.props;
    const { id, art_id, title, page_url } = data[0];

    return (
      <div className={className}>
        <Artwork src={`https://f4.bcbits.com/img/a${art_id}_16.jpg`} />
        <Info>
          <strong>{title}</strong>
          <br /> Now available on{' '}
          <a href={`https://lindseymariemusic.bandcamp.com/${page_url}`}>
            Bandcamp
          </a>
        </Info>

        <div style={{ gridArea: 'p' }}>
          <PlayerWrapper>
            <Player
              src={`https://bandcamp.com/EmbeddedPlayer/track=${id}/size=small/bgcol=ff0000/linkcol=da6da1/artwork=none/transparent=true/`}
              allow="encrypted-media"
              allowFullScreen
            />
          </PlayerWrapper>
        </div>
      </div>
    );
  }
}

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
