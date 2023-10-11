import React from 'react'
import "./Donation.css"
import MyPageHeader from '../components/MyPageHeader'
import Button from '../unit_components/Button'
import LoveIcon from '../svg/LoveIcon'
import SideBar from '../components/SideBar'
import LinkIcon from '../svg/LinkIcon'

const Donation = () => {
  return (
    <div> 
        <MyPageHeader showAllNav={false}/>
        <div className='Body_container'>
            <SideBar />
            <div className='container'>
                <h3>My Supporters</h3>
                <div className='support'>
                    <div className='supporters_item'>
                        <p>0</p>
                        <div className='supporters_numbers'>
                            <LoveIcon />
                            <p>Supporters</p>
                        </div>
                    
                    </div>

                    <div className='supporters_item'>
                        <p>0</p>
                        <div className='supporters_numbers'>
                            <LoveIcon />
                            <p>Last 30 days</p>
                        </div>
                    
                    </div>
                </div>
                <div className='contentss'>
                    <h5>You don’t have supporters yet</h5>
                    <p>Share your page to earn more.</p>
                    <Button text="Copy link" className="donation_button" icon={<LinkIcon />} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Donation
