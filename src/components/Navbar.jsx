import { useState} from 'react';
import mainLogo from '../assets/index';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={mainLogo} alt="drms" className="w-[124px]"/>
   </nav>
  )
}

export default Navbar