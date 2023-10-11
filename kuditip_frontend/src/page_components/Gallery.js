import React from 'react'
import "./Gallery.css"
import MyPageHeader from '../components/MyPageHeader'
import Button from '../unit_components/Button'
import SearchIcon from '../svg/SearchIcon'
import TimesIcon from '../svg/TimesIcon'
import SpeakerIcon from '../svg/SpeakerIcon'
import SideBar from '../components/SideBar'
import PlusIcon from '../svg/PlusIcon'


const Gallery = () => {
  return (
    <div>
        <MyPageHeader showAllNav={false}/>

        <div className='gallery_body'>
            <SideBar />
            {/* Start of page heading */}
            <div className='gallery_content'>
                <div className='heading'>
                    <h3>Gallery</h3>
                    <Button text='Add image' icon={<PlusIcon color='#fff' />} />
                </div>

                <div className='heading'>
                    <span className='search_rightside'>
                        <SearchIcon />
                        <p>Search</p>
                    </span>
                    <TimesIcon />
                </div>

                {/* Start of page heading for mobile */}
                <div className='heading-mobile'>
                    <p>published</p>
                    <div className='heading-icon'>
                        <SearchIcon />
                    </div>
                    {/* End of page heading for mobile */}
                </div>
                {/* End of page heading */}

                {/* Start of content */}
                <div className='gallery_contain'>
                    <SpeakerIcon />
                    <h4>Create your first post</h4>
                    <p>You can share your work, inspirations, or behind-the-scenes images with everyone or reserve them exclusively for your members. Creators who consistently update their galleries often receive more support.</p>
                </div>
            </div>
            {/* End of content */}
       
        </div>
    </div>
  )
}

export default Gallery
