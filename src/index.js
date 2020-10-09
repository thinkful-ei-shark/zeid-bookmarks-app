'use strict';

import $ from "jquery";
import api from "./api";
import style from "./style.css"
import store from "./store";
import cuid from "cuid"

import app from "./app";

function main() {
  api.getBookmarks().then((items) => {
    items.forEach((item) => store.addItem(item));
    app.render();
  });
  app.render();
  app.bindEventListeners();
}

$(main);