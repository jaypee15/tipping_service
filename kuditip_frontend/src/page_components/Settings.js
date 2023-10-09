import React from 'react'
import "./Settings.css"
import frame_11 from "../images/frame_11.png"
import homeicon from "../images/homeicon.png"
import lilian from "../images/lilian.png"
import membershipicon from "../images/membershipicon.png"
import viewicon from "../images/viewicon.png"
import donationicon from "../images/donationicon.png"
import posticon from "../images/posticon.png"
import galleryicon from "../images/galleryicon.png"
import messageicon from "../images/messageicon.png"
import payouticon from "../images/payouticon.png"
import settingsicon from "../images/settingsicon.png"
import navicon from "../images/navicon.png"
import fixed from "../images/fixed.png"
import upload from "../images/upload.png"

const Settings = () => {
  return (
    <div>
    {/* Start of top icon */}
        <header className='header-icon'>
            <div className='header-left'>
                <img src={frame_11} />
            </div>
            <div className='header-right'>
                <a href='' ><p>MyPage</p></a>
                <img src={lilian} />
            {/* End of top icon */}
            </div>  
            <div className='navicon'><img src={navicon} />
                <a href=''></a>
                <img src={lilian} /></div> 
        </header >

         {/* Start of Navigation bar */}
        <div className='page'>
            <div class="navbar">
                <ul>
                    <div className='homeicon'><li><a href=""><img src={homeicon} />Home</a></li></div>
                    <li><a href=""><img src={viewicon} />View Page</a></li>
                    <li><a href=""><img src={membershipicon} />Membership</a></li>
                    <li><a href=""><img src={donationicon} />Donation</a></li>
                    <li><a href=""><img src={posticon} />Post</a></li>
                    <li><a href=""><img src={galleryicon} />Gallery</a></li>
                    <li><a href=""><img src={messageicon} />Messages</a></li>
                    <li><a href=""><img src={payouticon} />Payout</a></li>
                    <li><a href=""><img src={settingsicon} />Settings</a></li>
                </ul>
            </div>
        
                {/* End of Navigation bar */}

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
   
  )
}

export default Settings
