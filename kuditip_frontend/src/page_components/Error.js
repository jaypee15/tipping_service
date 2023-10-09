import React from 'react'
import "./Error.css"
import Error404 from "../images/Error404.png"
import Button from '../unit_components/Button'
import FooterBottom from '../components/FooterBottom'

const Error = () => {
  return (
    <div>
        {/* Start of error404 message */}
        <div className='message'>
            <div className='msg-404'>
                <img src={Error404} />
            </div>
            <div className='message-text'>
                <h5>Oops! the page you’re looking could not be found</h5>
                <Button text="Go to Homepage" skip={true} className='home-button'/>   
            </div>
            
        </div>
        {/* End of error404 message */}
        <FooterBottom companyName={'#2172A3'} fill='#2172A3' />
    </div>
  )
}

export default Error
