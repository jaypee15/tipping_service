import changeUsername from '../images/frame_98.png';
import Button from '../unit_components/Button';


const CreateUsername = () => {
  return (
    <div className="pages_container">

        <h3>Choose a username</h3>

        <p>What do you want your link to be?</p>

        <div className="input_case">
            <input type="text" />
        </div>

        <img src={changeUsername} alt="" />
        
        <Button Next='Next'/>

    </div>
  )
}
export default CreateUsername