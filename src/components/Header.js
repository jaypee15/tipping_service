import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Logo from '../unit_components/Logo';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
  
        setShowMenu((prev) => !prev)
    
    }

  return (
    <div>
        <header className='header_section'>

            <Logo />

            <nav className='menu' onClick={toggleMenu}>

                <GiHamburgerMenu />

            </nav>

            <nav className='nav_section'>

                <NavLink to='/explore'>Explore</NavLink>

                <NavLink to='/aboutUs'>About Us</NavLink>

                <NavLink>Blog</NavLink>

                <NavLink to='/login'>Log In</NavLink>
                
                <NavLink to='/signup'>Sign Up</NavLink>

            </nav>
            
        </header>

        <div className='mobile' >

            <nav className={showMenu ? 'mobile_nav' : 'mobile_toggle'} >

                <NavLink to='/explore'>Explore</NavLink>

                <NavLink to='/aboutUs'>About Us</NavLink>

                <NavLink>Blog</NavLink>

                <NavLink to='/login'>Log In</NavLink>

                <NavLink to='/signup'>Sign Up</NavLink>

            </nav>
            
        </div>

    </div>
  )
}
export default Header