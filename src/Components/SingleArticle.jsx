import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import CommentsList from "./CommentsList";
import Voter from "../Components/Voter";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: ""
  };

  getArticle = () => {
    api
      .fetchArticle(this.props.article_id)
      .then(article => {
        console.log("resolved");
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        console.log(data);
        this.setState({ err: data.msg, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticle();
    }
  }

  render() {
    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <article className='SingleArticle'>

        <div className="SingleArticleContainer">

          <div className='SingleArticleInfo'>
            <h3 id="PostedBy">
              Posted by {author.charAt(0).toUpperCase() + topic.slice(1)} on{" "}
              {created_at.slice(0, 10)} in{" "}
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </h3>
            <h1 id="ArticleTitle">{title}</h1>
            <p id="ArticleText">{body}</p>
          </div>

          <div className='SingleArticleCardVotingSection'> 
            <div className="SingleArticleVoter">
              <Voter votes={votes} id={article_id} type={"articles"} />
            </div>  
          </div>               

        </div>

        <h3>Comments: {comment_count}</h3>

        <CommentsList article_id={article_id} username={this.props.username} />
        
      </article>
    );
  }
}

export default SingleArticle;
