import React from 'react'
import "./Membership.css"
import rafiki from "../images/rafiki.png"
import Frame228 from "../images/Frame228.png"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'
import FooterBottom from '../components/FooterBottom'
import Button from '../unit_components/Button'

const Membership = () => {
  return (
    <div>
        <MyPageHeader />

            {/* <SideBar /> */}
            <div className='container-item1'>
                 <SideBar />
                 <div className='container-item'>
                    <div className='container-item2'>
                        <div className='container-item2-border'>
                            <img src={rafiki} />
                            <h3>EARN MORE WITH KUDITIP</h3>
                            <p>Memberships are a great way to build recurring revenue, create engagement, and build deep and meaningful relationships with your fans. Start earning monthly/yearly upfront payments doing what you love!</p>
                            <Button text='Enable Membership' className={"bottom-btn"} />
                            {/* <div className='bottom-btn'>
                                <p>Enable membership</p>
                            </div> */}
                        </div>

                    </div>

                    <div className='container-item3'>
                        <div className='container-item3-border'>
                            <p>You don’t have any followers yet</p>
                            <p>Share your page with your audience to get started</p>
                            <div className='container-item4'>
                                <img src={Frame228} />
                                <a href=''><p>Share page</p></a>
                            </div>
                        </div>
                    </div>
                 </div>
                
                
            </div>
    <FooterBottom companyName={'#2172A3'} fill='#2172A3' />
            
       

        

    </div>
  )
}

export default Membership
