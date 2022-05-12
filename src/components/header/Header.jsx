import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className ="container header_container">
        <h5>Hello Im</h5>
        <h1>MJ Madiba</h1>
        <h5 className = "text-light">Fullstack Developer / Business Analyst</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt=""/>
        </div>

        <a href="#contacts" className='scroll_down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header