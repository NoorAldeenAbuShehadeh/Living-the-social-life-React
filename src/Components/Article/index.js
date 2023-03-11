import React from 'react'
import ArticleTitle from '../ArticleTitle'
import ArticleBody from '../ArticleBody'
import ArticleComment from '../ArticleComment'
import ContinueRead from '../ContinueRead'
import food from '../img/food.jpg'
import './Style.css'
const Article = () => {
  return (
    <div className='article-recent'>
        <div className="article-recent-main">
            <ArticleTitle />
            <ArticleBody />
            <ContinueRead />
        </div>
        <div class="article-recent-secondary">
            <img src={food} className='article-image'/>
            <ArticleComment />
        </div>
    </div>
  )
}

export default Article