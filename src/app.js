import $ from 'jquery';
import api from './api';
import store from './store';
import cuid from 'cuid';

function startPage() {
  const mainPage = `
    <div class="group">
      <div class="item">
        <form id="add-bookmark">
          <button type = "submit" class ="btn">New</button>
        </form>
      </div>
      <form id="filter-form">
        <div class ="item">
          <select name="filter" class ="btn" id="filter-button">
            <option id="filter1" value="1">>1 Stars</option>
            <option id="filter2" value="2">>2 Stars</option>
            <option id="filter3" value="3">>3 Stars</option>
            <option id="filter4" value="4">>4 Stars</option>
            <option id="filter5" value="5">>5 Stars</option>
          </select>
        </div>
        <div class="item">
          <button type="button" id="filter" class = "btn">Filter</button>
        </div>
      </form>
    </div>`;
  return mainPage;
}

function generateBookmarkItem(bookmark) {
  const bookmarkItem = `
  <li class="ind-bookmark" data-item-id="${bookmark.id}" tabindex="0">
    <div class="top-row group">
    <span class ="item" > <h2 style="padding: 50px 50px;">Title: ${bookmark.title}   </h2></span>
    <br />
      <span style="padding: 50px 50px;" class = "item">   Rating: ${bookmark.rating}</span>
      </div>
      <div class="bottom-row hidden">
      <a href="${bookmark.url}">Visit Site</a>
      <br />
      <p style="padding: 50px 50px;">${bookmark.desc}</p>
      <br>
      <button type = "submit" class ="btn "id="delete">Delete</button>
      </div>
    </li>
    `;
  return bookmarkItem;
}

function generateBookmarkString(bookmarkList) {
  const startingPage = startPage();
  const list = bookmarkList.map((item) => generateBookmarkItem(item));
  const items = startingPage + list;
  return items;
}

function handleNewButton() {
  $('main').on('submit', '#add-bookmark', function (e) {
    e.preventDefault();
    store.store.adding = true;
    render();
  });
}

function generateAddPage() {
  const addPage = `
<div class = "pageActions">
<form id ="add-bookmark-form">
<div class="item-column"
<br>
<label for="url">URL</label>
  <input type ="text" id="url" name="url" placeholder="Place URL here" required>
</div> 
<div class="item-column">
  <label for="name">Name</label>
  <input type="text" placeholder="Bookmark Name" name="name" id="name" required>
</div>
<div class="item-column">  
<label for="starval"> Star Value 1-5 </label><br>
  <input type="number" id="starvalue" name="starval" max="5" required>

</div>
<div class="item-column">  
  <label for="desc">Description</label>
  <br>
  <textarea name="desc" id="desc" rows="6"></textarea>
</div>
<div class ="bookmarkButton">
  <button type ="submit"class = "btn">Add Bookmark</button>
  </div>
</form>
</div>`;
  return addPage;
}

function getIdFromElement(item) {
  return $(item).parent().parent().attr('data-item-id');
}

function handleExpandButton() {
  $('main').on('click keypress', 'li', function (e) {
    $(this).children('.bottom-row').toggleClass('hidden');
  // $(`main`).on('click', 'li', function (e) {
  //   $(this).children('.bottom-row').toggleClass('hidden')
  // } );

    
  });
}

// function handleExpandButton() {   
//   $('main').on('click', 'li', () => {   
//     $(this).children('.bottom-row').toggleClass('hidden');
//             });        
            
            
//     $('main').on('keypress', 'li', () => {   
//       $(this).children('.bottom-row').toggleClass('hidden');
//           });  
        
//         };

function handleDeleteButton() {
  $('main').on('click', '#delete', function (e) {
    e.preventDefault();
    const id = getIdFromElement(e.currentTarget);
    api.deleteBookmark(id).then(() => {
      store.findAndDelete(id);
      render();
    });
  });
}

function handleFilter() {
  $('main').on('click', '#filter', function (e) {
    e.preventDefault();
    const filterNum = $('#filter-button').val();
    store.store.filter = filterNum;
    render();
  });
}

function filterBookmarks(bookmarks) {
  return bookmarks.filter((item) => {
    return item.rating >= store.store.filter;
  });
}

function handleBookmarkSubmit() {
  $('main').on('submit', '#add-bookmark-form', function (event) {
    event.preventDefault();
    let urlName = $('#url').val();
    let name = $('#name').val();
    let rating = $('#starvalue').val();
    let desc = $('#desc').val();
    api.postBookmark(name, urlName, rating, desc).then((data) => {
      store.addItem(data);
      if (data.message) {
        let err = ` <p>${data.message}</p>`
        $(`#errors`).html(err);
        // etc
        
        }
      console.log(data);
      store.store.adding = false;
      render();
    });
  });
}

const showError = function(message){   
   let err = `    <div>    <p>${message}</p>    </div>`;   
    $(`#errors`).html(err); 
    };      
     function clearError(){  
         $(`#errors-div`).html(``);  
         }






function render() {
  let bookmarksCall = filterBookmarks(store.store.bookmarks);
  let page = '';
  if (store.store.adding === false) {
    page += generateBookmarkString(bookmarksCall);
  } else {
    page += generateAddPage();
  }
  $('main').html(page);
}

function bindEventListeners() {
  handleBookmarkSubmit();
  handleNewButton();
  handleExpandButton();
  handleDeleteButton();
  handleFilter();
}

export default {
  bindEventListeners,
  render,
};
