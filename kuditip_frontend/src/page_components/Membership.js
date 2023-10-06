import React from 'react'
import "./Membership.css"
import rafiki from "../images/rafiki.png"
import Frame228 from "../images/Frame228.png"

const Membership = () => {
  return (
    <div>
        <div className='container1'>
            <div className='container-item1'>
                <div className='container-item2'>
                <img src={rafiki} />
                <h3>EARN MORE WITH KUDITIP</h3>
                <p>Memberships are a great way to build recurring revenue, create engagement, and build deep and meaningful relationships with your fans. Start earning monthly/yearly upfront payments doing what you love!</p>

                <div className='bottom-btn'>
                    <p>Enable membership</p>
                </div>

                <div className='container-item2'>
                    <p>You don’t have any followers yet</p>
                    <p>Share your page with your audience to get started</p>
                    <div className='container-item3'>
                        <img src={Frame228} />
                        <a href=''><p>Share page</p></a>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Membership
