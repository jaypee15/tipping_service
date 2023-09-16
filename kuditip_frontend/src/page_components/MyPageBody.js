import React from 'react'
import './MyPageBody.css'
import camera_icon from '../images/camera_icon.png'
import lilian_image from '../images/lilian_image.png'

const MyPageBody = () => {
  return (
    <>
      <div className='add-a-cover-iamge1'>
         <div className='add-a-cover-iamge2'>
            <img src={camera_icon} alt="logo" />
            <p>Add a cover image</p>
         </div>
      </div>

      <div className='lilain-icon'>
        <div className='lilian-img'>
            <img src={lilian_image} alt="logo" />
               <h4>Lilian</h4>
        </div>
            
           <div className='lilain-icon-btn'>
            <p>Followed</p>
           </div>

      </div>

     <div className='Gift-Lilian-Kudicash'>
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
                <input type="text"
                 placeholder='Leave a message ...'
                 />
              {/* */}
           </div>

        <div>
            <p>Tip  5 kudicash</p>
        </div>
        </div>
       
       
     </div>
    </>
  )
}

export default MyPageBody
