import React from 'react';
import ReactDom from 'react-dom';
import styled, { injectGlobal } from 'react-emotion';

import Info from 'app/sections/info';
import Releases from 'app/sections/releases';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Nunito');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font: 18px/1.6 Nunito;
    background: #FCFCFB;
    color: #3B2B2D;
  }

  h1 {
    font: bold 42px Comfortaa;
    color: #64494C
  }

  ::selection {
    background: #d4f3ff;

  }

  a {
    color: #da6da1;
    text-decoration: none;
    transition: color 150ms linear;

    :hover {
      color: #62494c;
    }
  }
`;

const App = styled('div')`
  min-height: 100vh;
  padding: 7vh 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Page = p => (
  <App>
    <Info />
  </App>
);

ReactDom.render(<Page />, document.getElementById('container'));
