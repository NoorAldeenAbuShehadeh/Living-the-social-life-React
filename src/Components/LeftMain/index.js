import React from 'react'
import Article from '../Article'
import ArticleFeatuerd from '../ArticleFeatuerd'
import './Style.css'
const LeftMain = () => {
  return (
    <div className='main'>
        <ArticleFeatuerd />
        <Article />
        <Article />
        <Article />
    </div>
  )
}

export default LeftMain