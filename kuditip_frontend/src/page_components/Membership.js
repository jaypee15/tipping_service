import React from 'react'
import "./Membership.css"
import rafiki from "../images/rafiki.png"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'
import FooterBottom from '../components/FooterBottom'
import Button from '../unit_components/Button'
import UpLoadIcon from '../svg/UpLoadIcon'

const Membership = () => {
  return (
    <div>
        <MyPageHeader />

        <div className='container-item1'>
            <SideBar />
            <div className='container-item'>
                <div className='container-item2'>
                    <div className='container-item2-border'>
                        <img src={rafiki} />
                        <h3>EARN MORE WITH KUDITIP</h3>
                        <p>Memberships are a great way to build recurring revenue, create engagement, and build deep and meaningful relationships with your fans. Start earning monthly/yearly upfront payments doing what you love!</p>
                        <Button text='Enable Membership' className={"bottom-btn"} />
                    </div>

                </div>

                <div className='container-item3'>
                    <div className='container-item3-border'>
                        <p>You don’t have any followers yet</p>
                        <p>Share your page with your audience to get started</p>
                        <Button text="Share page" icon={<UpLoadIcon fill='#1BAEDF'/>} className='container-item4' />
                    </div>
                </div>
           

            <FooterBottom companyName={'#2172A3'} fill='#2172A3' />
            </div>
        </div>
        
    </div>
  )
}

export default Membership
