const axios = require('axios')

exports.fetchAllArticles = topic => {
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

exports.fetchArticleCommentsByArticleID = (article_id) => {
  return axios
    .get(`https://satnams-news-api.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
}

exports.postNewComment = (article_id, comment) => {
  return axios
    .post(`https://satnams-news-api.herokuapp.com/api/articles/${article_id}/comments`, comment)
    .then(({ data: { comment } }) => {
      return comment;
    });
}

exports.deleteComment = (comment_id) => {
  return axios
    .delete(`https://satnams-news-api.herokuapp.com/api/comments/${comment_id}`)
    .then(() => {
    });
}

exports.patchVotes = (path, id, votes) => {
  return axios
    .patch(`https://satnams-news-api.herokuapp.com/api/${path}/${id}`, votes)
    .then(() => {
    });
}
