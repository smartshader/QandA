import React from 'react';
// import './App.css';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { fontFamily, fontSize, gray2 } from './Styles';

const App: React.FC = () => {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <Home />
    </div>
  );
};

export default App;
