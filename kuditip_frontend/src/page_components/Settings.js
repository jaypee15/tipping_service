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
                <a href=''>
                <img src={lilian} /></a></div> 
        </header >

         {/* Start of Navigation bar */}
        <div className='container'>
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
            {/* <div className='content'>
                <div>
                    <img src={fixed}/>
                </div>
                <div className='upload'>
                    <img src={upload} />
                </div>
                <div className='inputs'>
                    <input type='text'/>
                </div>
                <p>Name</p>
                <input type="email" id="name" name="name" placeholder="Email address" />
                <p>Username</p>
                <input type="email" id="name" name="name" placeholder="Email address" />
                <p>About you</p>
            </div> */}
        </div>
    </div>
   
  )
}

export default Settings
