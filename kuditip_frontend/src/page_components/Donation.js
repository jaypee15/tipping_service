import React from 'react'
import "./Donation.css"
import loveicon from "../images/loveicon.png"
import nairaicon from "../images/nairaicon.png"
import solar_bag from "../images/solar_bag.png"
import linkicon from "../images/linkicon.png"
import MyPageHeader from '../components/MyPageHeader'

const Donation = () => {
  return (
    <div> 
        <MyPageHeader showAllNav={false}/>
        {/* Start of body */}
        <div className='body'>  
                {/* Start of content1 */}
                <h5>My Supporters</h5>
                <div className='features'>
                    <div className='features-item'>
                        <p>0</p>
                        <div className='sub-features'>
                            <img src={loveicon} />
                            <p>Supporters</p>
                        </div>
                    </div>
            
                    <div className='features-item'>
                        <div className='features-icon'>
                            <img src={nairaicon} />
                            <p>0</p>
                        </div>
                        <div className='sub-features'>
                            <img src={solar_bag} />
                            <p>Last 30 days</p>
                        </div>
                    </div>
                </div>
                {/*End of content1 */}

            {/* Start of content2 */}
            <div className='content2'>
                <h5>You don’t have supporters yet</h5>
                <p>Share your page to earn more.</p>
                <div className='content-item2'>
                    <img src={linkicon} />
                    <a href=''><p>Copy link</p></a>
                </div>

            </div>
            {/* End of content2 */}
        </div>
        {/* End of body */}
    </div>
  )
}

export default Donation
