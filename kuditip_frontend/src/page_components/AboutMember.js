import Button from "../unit_components/Button"
import Logo from '../unit_components/Logo';
import { useNavigate } from "react-router-dom";


const AboutMember = () => {
  const navigate = useNavigate();

  return (
    <div className="pages_container">

      <div className="logo">
        <Logo />
      </div>

      <h3>About You</h3>
      <form>
        <p>Display</p>
      
        <div className="input_case">
          <input type="text" />
        </div>
        
        <p>Bio</p>

        <div className="input_case">
          <textarea name="" id="" cols="30" rows="10" placeholder="Introduce yourself and what you're creating"></textarea>
        </div>
        
      </form>

    </div>
  )
}
export default AboutMember