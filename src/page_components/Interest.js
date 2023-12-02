import { useEffect, useState } from "react";
import Logo from "../unit_components/Logo"
import './Interest.css'

const Interest = ({ formdata, setFormdata }) => {
    const interests = ['Advice', 'Art', 'Blogging', 'Comedy', 'Dance & Theatre', 'Designs', 'Education', 'Food & Drink', 'Health and Fitness', 'Lifestyle', 'Music', 'News', 'Podcast', 'Social', 'Software', 'Spirituality', 'Writing']

    const handleInterestToggle = (interest) => {
        const updatedInterests = formdata.interest.includes(interest)
            ? formdata.interest.filter(selected => selected !== interest)
            : [...formdata.interest, interest];

        setFormdata(prev => ({ ...prev, interest: updatedInterests }))


    }
    return (
        <div className="pages_container">
            <div className="logo">
                <Logo />
            </div>
            <div>
                <h4>Choose interests</h4>
                <p>Choose from the following categories. This helps people find your profile. You can change these at any time.</p>
                {interests.map((interest, i) =>
                    <span key={i}>
                        <div onClick={() => handleInterestToggle(interest)} className="interests">{interest}</div>
                    </span>
                )}
            </div>
        </div>
    )
}
export default Interest