import BulbContainer from "../components/BulbContainer"
import BulbIcon from "../svg/BulbIcon"
import MountainSunIcon from "../svg/MountainSunIcon"
import PhotoPlaceHolderIcon from "../svg/PhotoPlaceHolderIcon"
import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"
import { useNavigate } from "react-router-dom";


const UploadProfilePic = () => {
    const navigate = useNavigate();

  return (
    <div className="pages_container">
        <div className="logo">
            <Logo />
        </div>
        <form>
            <h4>Choose your profile picture</h4>
            <div className="choose_image">
                <MountainSunIcon />
                <p>Choose Image...</p>
            </div>
         <div className="profile_picture">
                <PhotoPlaceHolderIcon />
            </div>
            <BulbContainer text='You can change this at anytime!'/>
        </form>

    </div>
  )
}
export default UploadProfilePic