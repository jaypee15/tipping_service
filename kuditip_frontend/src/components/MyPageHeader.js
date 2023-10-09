import React from 'react'
import './MyPageHeader.css';
import Logo from '../unit_components/Logo';
import UpLoadIcon from '../svg/UpLoadIcon';
import PlusIcon from '../svg/PlusIcon';
import ProfilePic from './ProfilePic';


const MyPageHeader = ({showAllNav}) => {
  return (
    <>
     <div className='mypage_header'>
         <Logo />
            
         <div className='mypage-right-header'>
            {showAllNav && 
               <div className='mypage-right-header'>
                  <div className='arrow_up_icon'>
                     <UpLoadIcon />
                     <p>Share</p>
                  </div>

                  <div className='edit-page'>
                     <p>Edit Page</p>
                  </div>

                  <div className='plus_logo'>
                     <PlusIcon />
                  <p>Create </p>
                  </div>
               </div>
            }

            <div className='member_image'>
               <p>MyPage</p>
               <ProfilePic />
            </div>

         </div>
      </div>
    </>
  )
}
export default MyPageHeader
