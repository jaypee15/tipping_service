import Button from "../unit_components/Button"
import Logo from '../unit_components/Logo';


const AboutMember = () => {
  return (
    <div className="pages_container">
        {/* <Logo /> */}
        <h3>About You</h3>
        <p>Display</p>
        <div className="input_case">
            <input type="text" />
        </div>
        
        <p>Bio</p>

        <div className="input_case">
            <textarea name="" id="" cols="30" rows="10" placeholder="Introduce yourself and what you're creating"></textarea>
        </div>
        
        <Button Next='Next'/>
    </div>
  )
}
export default AboutMember