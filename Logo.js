import logo from '../images/logoAndName.png';
import { Link } from 'react-router-dom';


const Logo = ({ children }) => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} alt="kuditip_logo" />
      </Link>
      {children}
    </div>
  )
}
export default Logo