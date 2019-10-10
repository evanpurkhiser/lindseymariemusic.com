import React from 'react';
import ReactDom from 'react-dom';
import styled, { injectGlobal } from 'react-emotion';
import * as Sentry from '@sentry/browser';

import Info from 'app/sections/info';


Sentry.init({ dsn: 'https://2afa25599321471fbc5dd9610bd74804@sentry.io/1776129' });

injectGlobal`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  ::selection {
    background: #d4f3ff;
  }

  body {
    margin: 0;
    font: 1.125rem/1.6 Nunito;
    background: #FCFCFB;
    color: #3B2B2D;
  }

  h1 {
    font: bold 2.625rem Comfortaa;
    color: #64494C

  }

  a {
    color: #da6da1;
    text-decoration: none;
    transition: color 150ms linear;

    :hover {
      color: #62494c;
    }
  }

  p {
    margin: 0.75em 0;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
    }

    small {
      font-size: 0.875rem;
    }
  }
`;

const App = styled('div')`
  min-height: 100vh;
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
