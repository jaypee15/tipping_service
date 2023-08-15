import logo from '../images/frame_11.png';
import { Link } from 'react-router-dom'
import Button from '../unit_components/Button'


const Header = () => {
  return (
    <header>

        <img src={logo} alt="kuditip_logo" />

        <div>

            <Link>Explore</Link>

            <Link>About Us</Link>

            <Link>Blog</Link>

            <Link>Log In</Link>

            <Button />

        </div>
        
    </header>
  )
}
export default Header