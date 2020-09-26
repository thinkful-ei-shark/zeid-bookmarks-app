'use strict';
import $ from 'jquery';
import store from './store';


const pageStart = function(bookmarks) {
  console.log('pageStart');
  let menu = getUI();
  let bookmarkList = getList(bookmarks);
  return menu + bookmarkList;
}

const getUI = function() {
  return `<div id='menu'>
          </div>`;
}

const getList = function (bookmarks) {
  let list = '';
  list = bookmarks.map(function (bm) {
    let ratings = generateRating(bm.rating);
    let template = `<div class='bookmark-item' id=${bm.id}>
                    </div>`;
    if(bm.expanded) {
      template = `<div class='bookmark-item bookmark-expanded' id='${bm.id}'>
                  </div>`
    }
    return template;
  });
  console.log('list of bookmarks array is');
  console.log(list);
  list = list.join(" ");
  return `<div id='bookmark-list'>
            ${list}
          </div>`;
}

const generateRating = function (rating) {

};


const generateNewBookmarkView = function() {
  let template = `<form action="submit">
                   
                  </form>`;
  return template;
};


const starCSS = function (star) {
  if(star.hasClass('1*')){
    return 1;
  }
  else if(star.hasClass('2*')){
    return 2;
  }
  else if(star.hasClass('3*')){
    return 3;
  }
  else if(star.hasClass('4*')){
    return 4;
  }
  else if(star.hasClass('5*')){
    return 5;
  }
}

const handleCreateNewClicked = function() {
 


export default {
  render,
  bindEventListeners
};