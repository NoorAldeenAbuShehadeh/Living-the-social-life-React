import React from 'react'
import food from '../img/food.jpg'
import WidgetBody from '../WidgetBody'
import './Style.css'
const Post = () => {
  return (
    <div className='widget-recent-post'>
        <img src={food} className='widget-image'/>
        <WidgetBody />
    </div>
  )
}

export default Post