(this["webpackJsonpnorthcoders---frontend---news-api"]=this["webpackJsonpnorthcoders---frontend---news-api"]||[]).push([[0],{24:function(e,t,n){e.exports=n(57)},29:function(e,t,n){},30:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(29),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),p=(n(30),n(7)),h=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(p.a,{to:"/articles"},r.a.createElement("img",{id:"Home",src:"https://cdn-images-1.medium.com/max/184/1*LdnSztHVYhhd8K8EqlgCJQ@2x.png",alt:"NC-Logo",height:"70",width:"70"})))},d=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"Nav"},r.a.createElement(p.a,{to:"/articles"},r.a.createElement("button",{className:"NavButtons"},"Articles")),r.a.createElement(p.a,{to:"/topics"},r.a.createElement("button",{className:"NavButtons"},"Topics ")),r.a.createElement(p.a,{to:"/users"},r.a.createElement("button",{className:"NavButtons"},"Users"))))},f=function(e){var t=e.username;return r.a.createElement("div",{className:"Header"},r.a.createElement(h,null),r.a.createElement(d,null),r.a.createElement("h2",null,"Logged in as: ",t))},v=n(6),g=function(e){var t=e.err,n=t||"Page not found";return r.a.createElement("h5",null,n)},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentVote:0,err:""},n.handleClick=function(e){var t=e.target.name;n.setState((function(e){return{currentVote:e.currentVote+ +t}})),v.patchVotes(n.props.type,n.props.id,t).catch((function(e){n.setState((function(e){return{err:"Cannot vote anymore",currentVote:e.currentVote-+t}}))}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentVote,n=e.err;return n?r.a.createElement(g,{err:n}):r.a.createElement("div",{id:"voter"},r.a.createElement("button",{className:"upVoteButton",onClick:this.handleClick,name:"1",disabled:t>0},"\u25b2"),r.a.createElement("h2",{className:"voteValue"},this.props.votes+this.state.currentVote),r.a.createElement("button",{className:"downVoteButton",onClick:this.handleClick,name:"-1",disabled:t<0},"\u25bc"))}}]),t}(a.Component),b=function(e){var t=e.article_id,n=e.title,a=e.votes,c=e.comment_count,o=e.created_at,i=e.author;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement("h2",{id:"ArticleAuthor"},"Posted by ",i," on ",o.slice(0,10)),r.a.createElement(p.a,{className:"Link",to:"/articles/".concat(t)},r.a.createElement("h2",null,n)),r.a.createElement("h2",{id:"ArticleComments"},"Comments: ",c),r.a.createElement("div",{className:"ArticleCardVoter"},r.a.createElement(E,{id:t,type:"articles",votes:a})))},y=function(){return r.a.createElement("h2",null,"Loading...")},C=function(e){var t=e.comment_id,n=e.getComments,a=e.author,c=e.username;return r.a.createElement("button",{id:"DeleteButton",onClick:function(e){e.preventDefault(),a===c&&v.deleteComment(t).then((function(){n()}))}},"Delete")},j=function(e){var t=e.comment_id,n=e.body,a=e.author,c=e.votes,o=(e.created_at,e.getComments),i=e.username;return r.a.createElement("div",{id:"CommentCard"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,a," says:")," ",n,r.a.createElement(E,{votes:c,id:t,type:"comments"}),r.a.createElement(C,{comment_id:t,getComments:o,author:a,username:i}))))},O=n(23),A=n(10),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:n.props.username,body:""},n.handleChange=function(e){var t=e.target;n.setState(Object(A.a)({},t.name,t.value),(function(){}))},n.handleSubmit=function(e){e.preventDefault(),0!==n.state.body.replace(/\s/g,"").length&&v.postNewComment(n.props.article_id,Object(O.a)({},n.state)).then((function(){n.setState({username:n.props.username,body:""}),n.props.getComments()}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.body;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Comment:",r.a.createElement("input",{type:"text",name:"body",onChange:this.handleChange,value:e,required:!0})),r.a.createElement("button",{onClick:this.handleSubmit},"Post Comment")))}}]),t}(a.Component),_=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],isLoading:!0,err:""},n.getComments=function(){v.fetchArticleCommentsByArticleID(n.props.article_id).then((function(e){n.setState({comments:e,isLoading:!1})})).catch((function(e){var t=e.response.data;n.setState({err:t.err,isLoading:!1})}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getComments()}},{key:"componentDidUpdate",value:function(e,t){e.article_id!==this.props.article_id&&this.getComments()}},{key:"render",value:function(){var e=this,t=this.state.err;return this.state.isLoading?r.a.createElement(y,null):t?r.a.createElement(g,{err:!0}):r.a.createElement("div",null,r.a.createElement(k,{article_id:this.props.article_id,getComments:this.getComments,username:this.props.username}),this.state.comments.map((function(t){return r.a.createElement(j,Object.assign({key:t.comment_id,getComments:e.getComments,username:e.props.username},t))})))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:{},isLoading:!0,err:""},n.getArticle=function(){v.fetchArticle(n.props.article_id).then((function(e){console.log("resolved"),n.setState({article:e,isLoading:!1})})).catch((function(e){var t=e.response.data;console.log(t),n.setState({err:t.msg,isLoading:!1})}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getArticle()}},{key:"componentDidUpdate",value:function(e,t){e.article_id!==this.props.article_id&&this.getArticle()}},{key:"render",value:function(){var e=this.state.err;if(this.state.isLoading)return r.a.createElement(y,null);var t=this.state.article,n=t.article_id,a=t.title,c=t.body,o=t.votes,i=t.topic,s=t.author,l=t.created_at,u=t.comment_count;return e?r.a.createElement(g,{err:e}):r.a.createElement("article",null,r.a.createElement("div",{className:"ArticleContainer"},r.a.createElement("h3",null," Posted by ",s.charAt(0).toUpperCase()+i.slice(1)," on ",l.slice(0,10)," in ",i.charAt(0).toUpperCase()+i.slice(1)),r.a.createElement("h1",null,a),r.a.createElement("div",{className:"SingleArticleVoter"},r.a.createElement(E,{votes:o,id:n,type:"articles"})),r.a.createElement("p",{id:"ArticleText"},c)),r.a.createElement("h3",null,"Comments: ",u),r.a.createElement(_,{article_id:n,username:this.props.username}))}}]),t}(a.Component),N=function(e){var t=e.handleSortbyChange;return r.a.createElement("div",null,r.a.createElement("select",{className:"Sorter",onChange:function(e){e.preventDefault(),t(e.target.value)}},r.a.createElement("option",{value:"created_at"},"Date"),r.a.createElement("option",{value:"comment_count"},"Comments"),r.a.createElement("option",{value:"votes"},"Votes")))},L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0,err:"",sortby:""},n.getArticles=function(){v.fetchAllArticles(n.props.topic_slug,n.state.sortby).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){var t=e.response.data;n.setState({err:t.msg,isLoading:!1})}))},n.handleSortbyChange=function(e){console.log(e),n.setState({sortby:e},(function(){console.log(n.state),n.getArticles()}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"componentDidUpdate",value:function(e,t){e.topic_slug!==this.props.topic_slug&&this.getArticles()}},{key:"render",value:function(){var e=this.state,t=e.err;return e.isLoading?r.a.createElement(y,null):t?r.a.createElement(g,{err:t}):r.a.createElement("div",{className:"ArticleList"},r.a.createElement(N,{handleSortbyChange:this.handleSortbyChange}),this.state.articles.map((function(e){return r.a.createElement(b,Object.assign({key:e.article_id},e))})),r.a.createElement(p.b,null,r.a.createElement(w,{path:":article_id"})))}}]),t}(a.Component),S=function(e){var t=e.slug,n=e.description;return r.a.createElement("article",{className:"TopicCard"},r.a.createElement(p.a,{className:"Link",to:"/articles/topic/".concat(t)},r.a.createElement("h2",null,t)),r.a.createElement("p",null,n))},D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topics:[],isLoading:!0,err:""},n.getTopics=function(){v.fetchAllTopics().then((function(e){n.setState({topics:e,isLoading:!1})})).catch((function(e){var t=e.response.data;n.setState({err:t.msg,isLoading:!1})}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTopics()}},{key:"componentDidUpdate",value:function(e,t){e.title!==this.props.title&&this.getTopics()}},{key:"render",value:function(){var e=this.state,t=e.err,n=e.isLoading,a=e.topics;return n?r.a.createElement(y,null):t?r.a.createElement(g,{err:t}):r.a.createElement("div",{className:"TopicList"},a.map((function(e){return r.a.createElement(S,Object.assign({key:e.slug},e))})))}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0,err:""},n.getArticles=function(){v.fetchAllArticles(n.props.slug).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){var t=e.response.data;console.log(t.err),n.setState({err:t.err,isLoading:!1})}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getArticle()}},{key:"componentDidUpdate",value:function(e,t){e.topic!==this.props.topic&&this.getArticle()}},{key:"render",value:function(){if(this.state.err)return r.a.createElement(g,{err:!0});if(this.state.isLoading)return r.a.createElement(y,null);var e=this.state.articles.title;return r.a.createElement("div",null,r.a.createElement("h2",null,e))}}]),t}(a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Northcoders News"))}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"tickle122"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{username:this.state.username}),r.a.createElement(p.b,null,r.a.createElement(B,{path:"/"}),r.a.createElement(D,{path:"/topics/*"}),r.a.createElement(L,{path:"/articles/"}),r.a.createElement(L,{path:"/articles/topic/:topic_slug"}),r.a.createElement(w,{username:this.state.username,path:"/articles/:article_id"}),r.a.createElement(V,{path:"/articles"}),r.a.createElement(g,{default:!0})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){var a=n(39);t.fetchAllArticles=function(e,t){return a.get("https://satnams-news-api.herokuapp.com/api/articles",{params:{topic:e,sort_by:t}}).then((function(e){return e.data.articles}))},t.fetchArticle=function(e){return a.get("https://satnams-news-api.herokuapp.com/api/articles/".concat(e)).then((function(e){return e.data.article}))},t.fetchAllTopics=function(){return a.get("https://satnams-news-api.herokuapp.com/api/topics").then((function(e){return e.data.topics}))},t.fetchArticleCommentsByArticleID=function(e){return a.get("https://satnams-news-api.herokuapp.com/api/articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))},t.postNewComment=function(e,t){return a.post("https://satnams-news-api.herokuapp.com/api/articles/".concat(e,"/comments"),t).then((function(e){return e.data.comment}))},t.deleteComment=function(e){return a.delete("https://satnams-news-api.herokuapp.com/api/comments/".concat(e)).then((function(){}))},t.patchVotes=function(e,t,n){return a.patch("https://satnams-news-api.herokuapp.com/api/".concat(e,"/").concat(t),{inc_votes:n}).then((function(e){return e.data.votes}))}}},[[24,1,2]]]);
//# sourceMappingURL=main.13faa77f.chunk.js.map