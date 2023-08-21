import Button from "../unit_components/Button"
import TextInput from "../unit_components/TextInput"

const AboutMember = () => {
  return (
    <div className="pages_container">
        <h3>About You</h3>
        <p>Display</p>
        <div className="input_case">
            <input type="text" />
        </div>
        
        <p>Bio</p>

        <div className="input_case">
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        
        <Button />
    </div>
  )
}
export default AboutMember