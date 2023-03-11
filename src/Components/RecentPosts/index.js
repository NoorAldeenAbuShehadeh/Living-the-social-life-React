import React from 'react'
import WidgetTitle from '../WidgetTitle'
import Post from '../Post'
const RecentPosts = () => {
  return (
    <div className='sidebar-widget'>
        <WidgetTitle />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default RecentPosts