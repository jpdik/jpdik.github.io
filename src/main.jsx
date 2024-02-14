import React from 'react';

import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from '@redux/store';

import {Routes} from './router';

import './globals.css';
import './locale/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
);
