import React from 'react';
import styled from 'react-emotion';

import Logo from 'app/components/logo';
import LatestRelease from 'app/components/latestRelease';

import facebookLogo from 'app/assets/facebook.svg';
import instagramLogo from 'app/assets/instagram.svg';
import spotifyLogo from 'app/assets/spotify.svg';
import bandcampLogo from 'app/assets/bandcamp.svg';
import soundcloudLogo from 'app/assets/soundcloud.svg';

const Info = props => (
  <Section>
    <HeaderLogo />

    <Letter>
      <p>Hi Loves!</p>
      <p>
        Thank you so much for visiting my webpage, I appreciate you and all your
        support. I am a multi Genre vocalist based out of Chicago. I have a
        studio at home and am able to provide high quality vocals in a fast and
        collaborative manner. Below you can find links to all my other pages and
        social media, feel free to message me anytime. You can also listen below
        to my latest solo release on Bandcamp, where I often release originals
        and covers.
      </p>
      <p>
        I do vocals for many other artists as well which you can hear on my
        Facebook and SoundCloud.
      </p>
      <p>
        Know you are loved and thank you again for all your support, truly means
        the world to me 💕
      </p>
      <p>
        Sincerely,
        <br />
        Lindsey Marie
      </p>
    </Letter>

    <LatestReleaseItem />

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

const Section = styled('section')`
  max-width: 750px;
  padding: 4vh 95px;
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

const Letter = styled('section')`
  font-family: 'Handlee';
  text-align: left;
  margin-top: 3em;
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

const LatestReleaseItem = styled(LatestRelease)`
  margin: 40px 0;
  text-align: initial;
`;

export default Info;
