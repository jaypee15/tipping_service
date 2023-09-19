import React from 'react'
import './MyPageHeader.css';
import textlogo from '../images/textlogo.png'
import arrow_up_icon from '../images/arrow_up_icon.png'
import plus_logo from '../images/plus_logo.png'
import lilian_image from '../images/lilian_image.png'
import MyPageBody from './MyPageBody';


const MyPage = () => {
  return (
    <>
     <div className='mypage_header'>
        <div>
            <img src={textlogo} alt="logo" />
         </div>
         
      <div className='mypage-right-header'>
         <div className='arrow_up_icon'>
            <img src={arrow_up_icon} alt="logo" />
            <p>Share</p>
         </div>

         <div className='edit-page'>
            <p>Edit Page</p>
         </div>

         <div className='plus_logo'>
          <img src={plus_logo} alt="logo" />
           <p>Create </p>
         </div>

         <div className='lilian_image'>
            <p>MyPage</p>
            <img src={lilian_image} alt="logo" />
         </div>

      </div>
      </div>
      <MyPageBody/>
    </>
  )
}
export default MyPage
