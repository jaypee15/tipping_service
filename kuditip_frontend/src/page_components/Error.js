import React from 'react'
import "./Error.css"
import Error404 from "../images/Error404.png"

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
                <div className='message-button'>
                    <a href=''><p>Go to Homepage</p></a>
                </div>
            </div>
        </div>
        {/* End of error404 message */}
      
    </div>
  )
}

export default Error
