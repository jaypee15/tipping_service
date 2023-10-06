import React from 'react'
import "./Gallery.css"
import search from "../images/search.png"
import xicon from "../images/xicon.png"
import majesticicons_plus from "../images/majesticons_plus.png"
import soundicon from "../images/soundicon.png"


const Gallery = () => {
  return (
    <div>
        {/* Start of page heading */}
        <div className='heading'>
            <h5>Gallery</h5>
            <div className='heading-item'>
                <img src={majesticicons_plus} />
                <a href=''><p>Add image</p></a>
            </div>
         </div>
        <div className='heading-item3'>
            <img src={search} />
            <p>Search</p>
            <div className='heading-icon'>
                <img src={xicon} />
            </div>
         </div>
         {/* Start of page heading for mobile */}
         <div className='heading-mobile'>
            <p>published</p>
            <div className='heading-icon'>
                <img src={search} />
            </div>
            {/* End of page heading for mobile */}
         </div>
         {/* End of page heading */}

        {/* Start of content */}
        <div className='contain'>
            <img src={soundicon} />
            <h4>Create your first post</h4>
            <p>You can share your work, inspirations, or behind-the-scenes images with everyone or reserve them exclusively for your members. Creators who consistently update their galleries often receive more support.</p>
        </div>
        {/* End of content */}
       
      
    </div>
  )
}

export default Gallery
