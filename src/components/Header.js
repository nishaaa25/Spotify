import React from 'react';
import logo from "../assets/spotifylogo.png";

const Header = () => {
  return (
    <div className='w-full px-12 py-8'>
      <img src={logo} alt="logo" width={120}/>
    </div>
  )
}

export default Header
