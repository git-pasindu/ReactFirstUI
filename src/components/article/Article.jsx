import React from "react";
import "./article.css";

const Article = ({imgUrl,date,text}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p> Read Full article</p>
      </div>
     
    </div>
  )
};

export default Article;
