import React from 'react'
import "./Message.css"
import search from "../images/search.png"
import inbox_outline from "../images/inbox-outline.png"
import majesticons_plus1 from "../images/majesticons_plus1.png"

const Message = () => {
  return (
    <div>
        {/* Start of page heading */}
        <div className='heading'>
            <h5>Messages</h5>
         </div>
        <div className='heading-item3'>
            <p>All</p>
            <div className='heading-icon'>
                <img src={majesticons_plus1} />
                <img src={search} />
            </div>
         </div>
         {/* End of page heading */}

        {/* Start of content */}
        <div className='contain'>
            <img src={inbox_outline} />
            <h4>No messages yet</h4>
            <p>Either send a private message or distribute a message to all of your supporters or members.</p>

            <div className='bottom-btn1'>
                <img src={majesticons_plus1} />
                <p>New message</p>
            </div>
        </div>
        {/* End of content */}

       
      
    </div>
  )
}

export default Message
