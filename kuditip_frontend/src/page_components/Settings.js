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

const Settings = () => {
  return (
    <div>
     <header className='header-icon'>
        <div className='header-left'>
            <img src={frame_11} />
        </div>
        <div className='header-right'>
            <a href='' ><p>MyPage</p></a>
            <img src={lilian} />
        </div>
    </header>
        <div class="navbar">
        <ul>
            <li><a href=""><img src={homeicon} />Home</a></li>
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
    </div>
  )
}

export default Settings
