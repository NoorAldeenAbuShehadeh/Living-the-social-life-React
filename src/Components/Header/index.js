import React from 'react'
import LeftHeader from '../LeftHeader';
import RightHeader from '../RightHeader'; 
import './style.css'
export const Header = () => {
  return (
    <div className='navbar-border'>
      <div className="navbar">
        <LeftHeader/>
        <RightHeader />
      </div>
    </div>
  )
}
export default Header;