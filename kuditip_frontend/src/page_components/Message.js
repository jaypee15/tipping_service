import React from 'react'
import "./Message.css"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'
import SearchIcon from '../svg/SearchIcon'
import PlusIcon from '../svg/PlusIcon'
import MailBagIcon from '../svg/MailBagIcon'
import Button from '../unit_components/Button'

const Message = () => {
  return (
    <div>
        <MyPageHeader />
        {/* Start of page heading */}
        <div className='message_content'>
            <SideBar />
            <div className='message_body'>
                <h3>Messages</h3>
                <div className='Message_heading3'>
                    <p>All</p>
                    <div className='heading-icon'>
                        <PlusIcon color='#000' />
                        <SearchIcon />
                    </div>
                </div>
                {/* End of page heading */}

                {/* Start of content */}
                <div className='message_contain'>
                    <MailBagIcon />
                    <h4>No messages yet</h4>
                    <p>Either send a private message or distribute a message to all of your supporters or members.</p>

                    <Button text='New message' icon={<PlusIcon color='#000' height='20' width='20' strokeWidth='1.2' />} className='bottom-btn1' />
                </div>
            </div>
        </div>
        {/* End of content */}
    </div>
  )
}

export default Message
