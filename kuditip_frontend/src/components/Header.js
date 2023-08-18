import logo from '../images/frame_11.png';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
  return (
    <div>
        <header className='header_section'>

            <Link>
                <img src={logo} alt="kuditip_logo" />
            </Link>

            <nav className='menu'>
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

        <nav className='mobile_nav'>

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