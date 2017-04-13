import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
axios.defaults.baseURL = 'http://jingjingke.com/api/';

import { Router , hashHistory } from 'react-router'
import routeConfig from './routes'

ReactDOM.render(
  <Router history={hashHistory} routes={routeConfig} />,
  document.getElementById('root')
);
