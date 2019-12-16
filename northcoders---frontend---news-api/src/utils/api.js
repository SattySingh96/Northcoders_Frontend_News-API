const axios = require('axios')

exports.fetchAllArticles = topic => {
  console.log('this one')
  return axios
    .get('https://satnams-news-api.herokuapp.com/api/articles', { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
}

exports.fetchArticle = (article_id) => {
  return axios
    .get(`https://satnams-news-api.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
}

exports.fetchAllTopics = () => {
  return axios
    .get('https://satnams-news-api.herokuapp.com/api/topics')
    .then(({ data: { topics } }) => {
      return topics;
    });
}
