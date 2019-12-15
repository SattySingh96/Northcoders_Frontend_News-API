const axios = require('axios')

exports.fetchAllArticles = () => {
  return axios.get('https://satnams-news-api.herokuapp.com/api/articles')
  .then(({ data: { articles } }) => {
    return articles;
  });
}

exports.fetchArticle = (article_id) => {
  return axios.get(`https://satnams-news-api.herokuapp.com/api/articles/${article_id}`)
  .then(({ data : { article } })=>{
    return article;
  });
}