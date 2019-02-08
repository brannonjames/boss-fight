const axios = require('axios');

const URL = 'https://www.reddit.com/r/Bossfight/top/.json?sort=top&t=week&limit=100';


function fetchReddit() {
    return axios.get(URL)
    .then(res => res.data.data.children)
    .then(children => {
      return children.filter(({ data: { url } }) => {
        return url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('gif');
      }).map(child => {
        let {id, title: name, author: creator, ups: offense, num_comments: defense, url: photo} = child.data;
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
