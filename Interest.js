import { useState } from "react";
import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"
import { useNavigate } from "react-router-dom";


const Interest = () => {
    const [selectedInterests, setSelectedInterests] = useState([])

    const interests = ['Advice', 'Art', 'Blogging', 'Comedy', 'Dance & Theatre', 'Designs', 'Education', 'Food & Drink', 'Health and Fitness', 'Lifestyle', 'Music', 'News', 'Podcast', 'Social', 'Software', 'Spirituality', 'Writing']
    const handleInterestToggle = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest))
        } else {
            setSelectedInterests([...selectedInterests, interest])
        }
    }

    console.log(selectedInterests)
    return (
    <div className="pages_container">                   
        <div>
            <h4>Choose interests</h4>
            <p>Choose from the following categories. This helps people find your profile. You can change these at any time.</p>
            {interests.map((interest, i) =>
            <span onClick={() => handleInterestToggle(interest)} key={i}>
                <div className="interests">{interest}</div>
            </span>
            )}
        </div>
    </div>
  )
}
export default Interest