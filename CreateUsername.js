import BulbIcon from '../svg/BulbIcon';
import Button from '../unit_components/Button';
import Logo from '../unit_components/Logo';
import { useNavigate } from "react-router-dom";


const CreateUsername = () => {
  const navigate = useNavigate();

  return (
    <div className="pages_container">
      
      <div>
        <h4>Choose a username</h4>
        <p>What do you want your link to be?</p>
        <div className="input_case">
          <input type="text" />
        </div>
        <div className="bulb_container">
          <BulbIcon />
          <div className="vertical_line"></div>
          <p>You can change this at anytime!</p>
        </div>
      </div>
    </div>
  )
}
export default CreateUsername