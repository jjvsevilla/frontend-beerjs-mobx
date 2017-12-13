import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import store from './stores';
import App from './components/App';

useStrict(true);

injectGlobal`
  @font-face {
    font-family: 'Seymour One';
    src: url(${process.env.PUBLIC_URL}/SeymourOne-Regular.ttf);
  }

  html {
    font-size: 16px;

    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
  }
`;

const repo = `/${window.location.pathname.split('/')[1]}`;

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter basename={repo}>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
