import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Logos/cropped_unfluke_full.148e5bfc.png';
import Bell from '../Logos/bell-icon.d99e8edc.png';
import Coin from '../Logos/coin.9bfaef7e.jpeg';
import Profile from '../Logos/monkey.5456259d.jpg';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
<nav className="navbar navbar-expand-lg navbar-light " id='navbar'>
  <div className="navbar-brand">
    <img src={logo} alt="Logo" className="navbar-logo" />
  </div>
  <div className=' ml-auto'>
  <div className='profiles' >
  <img src={Bell} alt="Bell" className="bell" onClick={toggleDropdown} />
    <img src={Coin} alt="Coin" className="bell" />
    <img src={Profile} alt="Profile" className="bell" onClick={toggleDropdown} />
  </div>
  </div> 
</nav>

  );
};

export default NavBar;