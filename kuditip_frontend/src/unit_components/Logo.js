import logo from '../images/frame_11.png';
import { Link } from 'react-router-dom';


const Img = () => {
  return (
    <div>
        <Link>
            <img src={logo} alt="kuditip_logo" />
        </Link>
    </div>
  )
}
export default Img