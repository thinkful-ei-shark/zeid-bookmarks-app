

import cuid from "cuid";
import { post } from "jquery";
import app from "./app";
// import cuid from "cuid" couldn't get this to work as intended, loaded into scripts

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/zeiddiez/bookmarks';
// GET is not necessary with async functions?
// new to async and unsure of its behavior 100% 
async function getBookmarks() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function postBookmark(title, url, rating, desc) {
  let newBookmark = JSON.stringify({
    title: title,
    url: url,
    rating: rating,
    desc: desc,
    id: cuid(),
  });
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newBookmark,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteBookmark(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default {
  getBookmarks,
  postBookmark,
  deleteBookmark,
};