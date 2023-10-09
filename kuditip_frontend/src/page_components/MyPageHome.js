import React, { useState } from 'react'
import './MyPageHome.css'
import MyPageHeader from '../components/MyPageHeader'
import CameraIcon, { CameraIconBlue, CameraIconWhite } from '../svg/CameraIcon'
import ProfilePic from '../components/ProfilePic'
import Button from '../unit_components/Button'

const MyPageHome = () => {
   const [message, setMessage] = useState();

  return (
    <>
    <MyPageHeader />
      <div className='add-a-cover-iamge1'>
         <div className='add-a-cover-iamge2'>
            <CameraIconWhite height="30" width="30"/>
            <p>Add a cover image</p>
         </div>
      </div>

      <div className='member-icon'>
        <div className='member-img'>
            <ProfilePic className={'member-img'} />
            <span className="camera-icon">
            <CameraIconBlue height="30" width="30" />
            </span>
            <h4>Lilian</h4>
        </div>

        <div>
            <Button text="Followed" className={"followed-btn"}/>
        </div>

      </div>

      <div className='Gift-member-Kudicash'>

        <div className='bio'>
          <p>Bio......</p>
        </div>

        <div>
            <div className='head-line'>
               <h4>Gift Lilian Kudicash</h4>
            </div>

            <div className='headline-box'>
               <div className='circle1'>kT</div>
               <div className='xee'>X</div>
               <div  className='circle2'>01</div>
               <div  className='circle3'>03</div>
               <div  className='circle4'>05</div>
               <div  className='circle5'>10</div>
            </div>


            <div className='Leave-a-message'>

               <textarea 
                  placeholder='Leave a message ...' 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               ></textarea>

            </div>

            <Button text="Tip  5 kudicash" className='tip_kudicash_btn'/>

         </div>   
      </div>
    </>
  )
}

export default MyPageHome
