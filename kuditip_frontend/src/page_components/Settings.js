import React from 'react'
import "./Settings.css"
import homeicon from "../images/homeicon.png"
import membershipicon from "../images/membershipicon.png"
import viewicon from "../images/viewicon.png"
import donationicon from "../images/donationicon.png"
import posticon from "../images/posticon.png"
import galleryicon from "../images/galleryicon.png"
import messageicon from "../images/messageicon.png"
import payouticon from "../images/payouticon.png"
import settingsicon from "../images/settingsicon.png"
import fixed from "../images/fixed.png"
import upload from "../images/upload.png"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'

const Settings = () => {
  return (
    <div>
        <MyPageHeader />

         {/* Start of Navigation bar */}
        <div className='' style={{display: "flex"}}>
            <SideBar />
                {/* End of Navigation bar */}
                <div className='page'>
            {/* Start of Registration form */}
            <div className='sub-content'>
                <div className='overlay'>
                    <img src={fixed}/>
                    <div className='upload'>
                        <a href=''><img src={upload} /></a>
                    </div>
                </div>
                <div className='input-ele'>
                    <p>Name</p>
                    <div className='input-pos'>
                        <input type="email" id="name" name="name"  placeholder="Lilian" />
                    </div>
                    <p>Username</p>
                    <div className='input-pos'>
                        <input type="text"       id="name" name="name" placeholder="KudiTip/Lilian" />
                    </div>
                    <p>About you</p>
                    <div className='input-post'>
                        <input type="text" name="input" />
                    </div>
                    <p>What do you do</p>
                    <div className='input-post1'>
                        <input type="text" name="input" />
                    </div>
                    <p>Website</p>
                    <div className='input-post1'>
                        <input type="text" name="input" />
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
   
  )
}

export default Settings
