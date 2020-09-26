'use strict';
import cuid from 'cuid'

const store = { bookmarks: [
                  {
                    id: 'x56w',
                    title: 'Title 1',
                    rating: 3,
                    url: 'http://www.title1.com',
                    desc: 'lorem ipsum dolor sit',
                    expanded: false
                  },
                  {
                    id: '6ffw',
                    title: 'Title 2',
                    rating: 5,
                    url: 'http://www.title2.com',
                    desc: 'dolorum tempore deserunt',
                    expanded: false
                  } 
                ],
                adding: false,
                error: null,
                filter: 0
              };
const bookmarks = store.bookmarks

const toggleAddFunc = function () {
    console.log('toggleAddFunc');
  store.adding = !store.adding;
};
const addStateFunc = function() {
    console.log('addStateFunc');
  return store.adding;
};

const makeBookmarkFunc = function (title, rating, url, desc) {
    console.log('makeBookmarkFunc');
    let bkmark = {
      id: cuid(),
      title: title,
      rating: rating,
      url: url,
      desc: desc,
      expanded: false
    }
    bookmarks.push(bkmark);
  };


  const bookmarkFunc = function () {
    console.log('bookmarkFunc');
    let filteredBookmarks = bookmarks.filter(function (bookmark) {
      return bookmark.rating <= store.filter;
    });
    return filteredBookmarks;
  };
  
  const ratingFunc = function (id, rating) {
    for(let i = 0; i < bookmarks.length; i++){
      if(bookmarks[i].id === id){
        bookmarks[i].rating = rating;
      }
    }
    console.log('ratingFunc');
  };
  
  const expandFunc = function (id) {
    console.log('expandFunc');
    for(let i = 0; i < bookmarks.length; i++){
      if(bookmarks[i].id === id){
        bookmarks[i].expanded = !bookmarks[i].expanded;
      }
    }
  }
  

/////////////////////

let error = null;
let filter = false;
let adding = false;
let filteredBookmarks = [];



export default {
    toggleAddFunc,
    addStateFunc,
    makeBookmarkFunc,
    bookmarkFunc,
    ratingFunc,
    expandFunc,
}