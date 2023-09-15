import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"
import { useNavigate } from "react-router-dom";


const Interest = () => {
    const navigate = useNavigate();

    const interests = ['Advice', 'Art', 'Blogging', 'Comedy', 'Dance & Theatre', 'Designs', 'Education', 'Food & Drink', 'Health and Fitness', 'Lifestyle', 'Music', 'News', 'Podcast', 'Social', 'Software', 'Spirituality', 'Writing']
    const handleSubmit = () => {
        navigate('/unlockFeatures')
    }
    return (
    <div className="pages_container">
        <div className="logo">
            <Logo />
        </div>                    
        <form onSubmit={handleSubmit}>
            <h4>Choose interests</h4>
            <p>Choose from the following categories. This helps people find your profile. You can change these at any time.</p>
            {interests.map((interest, i) =>
            <span key={i}>
                <div className="interests">{interest}</div>
            </span>
            )}
            <Button text='Next'/>
        </form>
    </div>
  )
}
export default Interest