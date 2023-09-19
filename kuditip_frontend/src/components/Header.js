// import logo from '../images/frame_11.png';
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

            {/* <Link>
                <img src={logo} alt="kuditip_logo" />
            </Link> */}

            <nav className='menu' onClick={toggleMenu}>

                <GiHamburgerMenu />

            </nav>

            <nav className='nav_section'>

                <NavLink>Explore</NavLink>

                <NavLink>About Us</NavLink>

                <NavLink>Blog</NavLink>

                <NavLink to='/login'>Log In</NavLink>
                
                <NavLink to='/signup'>Sign Up</NavLink>

            </nav>
            
        </header>

        <div className='mobile' >

            <nav className={showMenu ? 'mobile_nav' : 'mobile_toggle'} >

                <NavLink>Explore</NavLink>

                <NavLink>About Us</NavLink>

                <NavLink>Blog</NavLink>

                <NavLink>Log In</NavLink>

                <NavLink>Sign Up</NavLink>

            </nav>
            
        </div>

    </div>
  )
}
export default Header