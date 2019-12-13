const axios = require('axios')

exports.fetchAllArticles = () => {
  return axios.get('https://satnams-news-api.herokuapp.com/api/articles').then(({ data: { articles } }) => {
    console.log(articles)
    return articles;
  });
}