'use strict';
import $ from 'jquery';
import cuid from 'cuid';

import './index.css';

import app from './app';




const main = function () {
  app.bindEventListeners();
  app.render();
};

$(main);