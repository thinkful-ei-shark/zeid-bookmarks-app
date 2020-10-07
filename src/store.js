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


export default {

}