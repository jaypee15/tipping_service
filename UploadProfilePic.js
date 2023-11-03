import { useState } from "react"
import BulbContainer from "../components/BulbContainer"
import BulbIcon from "../svg/BulbIcon"
import MountainSunIcon from "../svg/MountainSunIcon"
import PhotoPlaceHolderIcon from "../svg/PhotoPlaceHolderIcon"
import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"
import { useNavigate } from "react-router-dom";


const UploadProfilePic = () => {
    const [image, setImage] = useState(null)
    const handleFileChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };
    return (
        <div className="pages_container">

            <div>
                <h4>Choose your profile picture</h4>
                <div className="choose_image">
                    <label htmlFor="imageUpload">
                        <MountainSunIcon />
                        <p>Choose Image...</p>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <div className="profile_picture">

                    {image ? <img style={{height: '100px', width: '100px'}} src={URL.createObjectURL(image)} alt="uploadedPicture" /> : <PhotoPlaceHolderIcon />}
                </div>
                <BulbContainer text='You can change this at anytime!' />
                <Button text='Next' />
            </div>


        </div>
    )
}
export default UploadProfilePic