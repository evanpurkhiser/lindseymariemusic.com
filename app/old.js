const StyledArtwork = styled('img')`
  height: 350px;
  width: 350px;
`;

const ReleaseDate = styled('div')`
  transform: rotate(-90deg) translateX(-100%) translateY(-100%);
  position: absolute;
  background: #222;
  padding: 4px 8px;
  color: #fff;
  left: -3px;
  top: 0;
  font-size: 1em;
  transform-origin: top left;
  font-family: Questrial;
  text-transform: uppercase;
`;

const StyledWaveform = styled(Waveform)`
  height: 80px;
  width: 100%;
`;

const Details = p => (
  <div {...p}>
    <StyledWaveform />
  </div>
);

const StyledDetails = styled(Details)`
  margin-left: 10px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TrackItem = p => (
  <div {...p}>
    <ReleaseDate>June 29 / 2018</ReleaseDate>
    <StyledArtwork src={albumArt} />
    <StyledDetails />
  </div>
);

const StyledTrackItem = styled(TrackItem)`
  position: relative;
  display: flex;
  flex-direction: row;
`;
