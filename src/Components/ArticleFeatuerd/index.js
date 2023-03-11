import React from 'react'
import ArticleTitle from '../ArticleTitle'
import img1 from '../life.jpg'
import ArticleComment from '../ArticleComment'
import ArticleInfo from '../ArticleInfo'
import ContinueRead from '../ContinueRead'
import './Style.css'
const ArticleFeatuerd = () => {
  return (
    <div className='article-featuerd'>
        <img src={img1} />
        <ArticleComment/>
        <ArticleTitle />
        <ArticleInfo />
        <ContinueRead />
    </div>
  )
}

export default ArticleFeatuerd