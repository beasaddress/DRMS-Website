import { useState} from 'react';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants';
import mainLogo6 from '../assets/mainLogo6.png';




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleMenuItemClick = () => {
    setToggle(false);
  }

  
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar">
      <img src={mainLogo6} alt="drms" className="w-[500px] h-[290px]  z-[999] mainLogo" /> {/*w-[344px] h-[182px] */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[10]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-[white]`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center z-[2147483647] mobileMenu">
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-0 right-0 mx-4 my-12 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-[white]`}
                 >
                  <a href={`#${nav.id}`} onClick={handleMenuItemClick}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      </div>
   </nav>
  )
}

export default Navbar