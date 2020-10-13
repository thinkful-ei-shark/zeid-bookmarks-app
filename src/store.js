const store = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0,
};

const addItem = function (item) {
  this.store.bookmarks.push(item);
};

const findById = function (id) {
  return this.store.bookmarks.find((currentItem) => currentItem.id === id);
};

const findAndDelete = function (id) {
  this.store.bookmarks = this.store.bookmarks.filter(
    bookmark => bookmark.id !== id
  );
};

function filterResults(stars) {
  this.store.filter = this.store.bookmarks.filter(
    stars => stars.rating >= this.store.filter
  );
}

export default {
  store,
  addItem,
  findAndDelete,
  findById,
  filterResults,
};