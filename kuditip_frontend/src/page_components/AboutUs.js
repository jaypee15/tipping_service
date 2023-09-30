import React from 'react'
import "./AboutUs.css"
import Whouseskudi from "../images/Whouseskudi.png"

const AboutUs = () => {
  return (
    <div>
    {/* Start of AboutUs page top content */}
        <header className='top-content'>
            <h4>What Makes KudiTip Different</h4>
            <p>Nigerian content creators often do not receive financial compensation for their work, even though they provide valuable entertainment and information to the public. This is because there is no easy way for users to tip Nigerian content creators. As a result, Nigerian content creators often have to rely on other sources of income, such as advertising,sponsorships which can be unreliable and unpredictable or or in the case of twitter(X) creators; ad revenue that everyone is not eligible for.</p>
        </header>
        {/* End of AboutUs page top content */}

        {/* Start of create your section */}
        <section className='create-page'>
            <h4>Claim your page</h4>
            <p>Creating your page and initiating the flow of donations and support can be accomplished within a minute or takes only a minute!</p>
            <div className='create-page-btn'>
                <a href=''>start your page</a>
            </div>
        </section>
        {/* End of create your section */}

        {/* Start of section2 */}
        <div className='section2'>
            <img src={Whouseskudi} />
            <div className='section2-kid'>
                <h4>Who uses KudiTip?</h4>
                <p>Musicians, Writers, Comedians, and all kinds of creators use KudiTip. It is a simple way to tip your favorite creators with just a link! KudiTip is mostly for people that wants to make an income directly from fans.</p>
            </div>
        </div>



      
    </div>
  )
}

export default AboutUs
