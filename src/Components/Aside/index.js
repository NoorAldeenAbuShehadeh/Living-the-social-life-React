import React from 'react'
import AboutMe from '../AboutMe'
import RecentPosts from '../RecentPosts'
const Aside = () => {
  return (
    <div className='sidebar'>
        <AboutMe />
        <RecentPosts />
    </div>
  )
}

export default Aside