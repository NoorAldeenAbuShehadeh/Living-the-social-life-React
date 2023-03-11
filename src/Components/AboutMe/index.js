import React from 'react'
import WidgetTitle from '../WidgetTitle'
import WidgetBody from '../WidgetBody'
import aboutme from '../img/about-me.jpg'
import './Style.css'
const AboutMe = () => {
  return (
    <div className='sidebar-widget'>
        <WidgetTitle />
        <img src={aboutme} className='widget-image'/>
        <WidgetBody />
    </div>
  )
}

export default AboutMe