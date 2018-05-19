const axios = require('axios');

const URL = 'https://www.reddit.com/r/Bossfight/.json?sort=top&t=month&limit=100';


function fetchReddit() {
    return axios.get(URL)
    .then(res => res.data.data.children)
    .then(children => {
      // children.shift();
      return children.filter(child => child.data.preview.images[0].source.url).map(child => {
        let {id, title: name, author: creator, ups: offense, num_comments: defense, preview} = child.data;
        let photo = preview.images[0].variants.gif ? preview.images[0].variants.gif.source.url : preview.images[0].source.url
        return {
          id,
          name,
          creator,
          offense,
          defense,
          photo,
          showing: false,
          selected: false
        }
      })
    })
    .catch(err => {
      return err;
    });
}

export default fetchReddit;
