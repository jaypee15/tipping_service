import React from 'react'
import "./Settings.css"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'
import PhotoPlaceHolderIcon from '../svg/PhotoPlaceHolderIcon'
import CloudIcon from '../svg/CloudIcon'

const Settings = () => {
  return (
    <div>
        <MyPageHeader />

        <div className='' style={{display: "flex"}}>
            <SideBar />   
            <div className='Settings_content'>
                {/* Start of Registration form */}
                <div className='PhotoPlaceHolder'>
                    <div className='PhotoPlaceHolderIcon'>
                        <PhotoPlaceHolderIcon />
                    </div>
                    

                    <div className='cloud_icon'>
                        <CloudIcon />
                    </div>
                </div>

                <div className='setting_inputField'>

                    <div>
                        <label>Name</label>
                        <input type="text" id="name" name="name"  placeholder="Please enter name" />
                    </div>

                    <div>
                        <label>Username</label>
                        <input type="text" id="name" name="name" placeholder="Please enter username" />
                    </div>

                    <div>
                        <label>About you</label>
                        <textarea 
                            placeholder='Tell us about yourself...' 
                            required
                            // value={message}
                            // onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label>What do you do</label>
                        <input type="text" name="input" />
                    </div>

                    <div>
                        <label>Website</label>
                        <input type="text" name="input" />
                    </div>

                </div>

            </div>

        </div>

    </div>
   
  )
}

export default Settings
