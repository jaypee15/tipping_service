import logo from '../images/logoAndName.png';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} alt="kuditip_logo" />
      </Link>
    </div>
  )
}
export default Logo