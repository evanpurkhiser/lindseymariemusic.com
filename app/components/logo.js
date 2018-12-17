import React from 'react';
import styled from 'react-emotion';

import logoSvg from 'app/assets/logo.svg';

const Logo = props => (
  <LogoContainer {...props}>
    <svg viewBox={logoSvg.viewBox} height="100%" width="100%">
      <use href={`#${logoSvg.id}`} xlinkHref={`#${logoSvg.id}`} />
    </svg>
  </LogoContainer>
);

const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  background: #fce5f0;
  color: #62494c;
  border-radius: 5px;
  height: 316px;
  width: 400px;
  padding: 40px 30px;
`;

export default Logo;
