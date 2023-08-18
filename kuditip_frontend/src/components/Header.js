import logo from '../images/frame_11.png';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
  
        setShowMenu((prev) => !prev)
  
    //   document.querySelector(".mobile_nav")?.classList.toggle('toggleBoxChange');
  
    }

  return (
    <div>
        <header className='header_section'>

            <Link>
                <img src={logo} alt="kuditip_logo" />
            </Link>

            <nav className='menu' onClick={toggleMenu}>

                <GiHamburgerMenu />

            </nav>

            <nav className='nav_section'>

                <NavLink>Explore</NavLink>

                <NavLink>About Us</NavLink>

                <NavLink>Blog</NavLink>

                <NavLink>Log In</NavLink>

                <NavLink>Sign Up</NavLink>

            </nav>
            
        </header>

        <nav className={showMenu ? 'mobile_nav' : 'mobile_toggle'}>

            <NavLink>Explore</NavLink>

            <NavLink>About Us</NavLink>

            <NavLink>Blog</NavLink>

            <NavLink>Log In</NavLink>

            <NavLink>Sign Up</NavLink>

        </nav>

    </div>
  )
}
export default Header