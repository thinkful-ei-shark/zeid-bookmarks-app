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
    console.log('getUI');
  return `<div id='menu'>


          </div>`;
}

const getList = function (bookmarks){
    console.log('getList');
  return `<div id='bookmark-list'>
            ${bookmarks}
          </div>`;
}



const generateNewBookmarkView = function() {
    console.log('generateNewBookmarkView');
  let template = `<form action="submit">
                   
                  </form>`;
  return template;
};



const handleCreateNewClicked = function() {
    console.log('handleCreateNewClicked');
 

}


export default {
    pageStart,

};