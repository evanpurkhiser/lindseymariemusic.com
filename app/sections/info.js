import React from 'react';
import styled from 'react-emotion';

import Logo from 'app/components/logo';

import facebookLogo from 'app/assets/facebook.svg';
import instagramLogo from 'app/assets/instagram.svg';
import spotifyLogo from 'app/assets/spotify.svg';
import bandcampLogo from 'app/assets/bandcamp.svg';
import soundcloudLogo from 'app/assets/soundcloud.svg';

const Info = props => (
  <Section>
    <HeaderLogo />

    <Title>Singer &amp; Songwriter</Title>
    <p>
      Lindsey Marie is a multi-genre vocalist and songwriter based out of
      Chicago USA. Having fostered a love and passion for singing since
      childhood, and armed with a unique vocal range of Alto up through
      Mezzo-Soprano, Lindsey’s powerful and hard hitting vocals include an
      emotional edge that resonates across the dance floor.
    </p>

    <SocialIcons>
      <Icon
        src={facebookLogo}
        to="https://www.facebook.com/lindseymariemusic"
      />
      <Icon
        src={instagramLogo}
        to="https://www.instagram.com/lindseymarie_music/"
      />
      <Icon
        src={spotifyLogo}
        to="https://open.spotify.com/artist/3CNClHbvGoliUd7kzcNzGl"
      />
      <Icon src={bandcampLogo} to="http://lindseymariemusic.bandcamp.com" />
      <Icon
        src={soundcloudLogo}
        to="https://soundcloud.com/lindseymarie_vocalist"
      />
    </SocialIcons>

    <small>
      Contact{' '}
      <a href="mailto:lindsey.marie.vocalist@gmail.com">
        lindsey.marie.vocalist@gmail.com
      </a>{' '}
      for inquries
    </small>
  </Section>
);

const Section = styled('div')`
  max-width: 750px;
  padding: 7vh 95px;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;

const HeaderLogo = styled(Logo)`
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    max-width: none;
  }
`;

const Title = styled('h1')`
  margin: 50px 0;
`;

const SocialIcons = styled('div')`
  display: flex;
  max-width: 350px;
  margin: 40px auto;
  justify-content: space-between;
`;

const Icon = styled(({ src, to, ...props }) => (
  <a href={to} {...props}>
    <svg viewBox={src.viewBox} height="100%" width="100%">
      <use href={`#${src.id}`} xlinkHref={`#${src.id}`} />
    </svg>
  </a>
))`
  height: 35px;
  color: #62494c;
  padding: 0 10px;
  transition: color 150ms linear, transform 150ms ease-in-out;

  :hover {
    color: #da6da1;
    transform: scale(1.1);
  }
`;

export default Info;
