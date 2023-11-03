import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"
import { useNavigate } from "react-router-dom";


const EarnPlan = () => {
    const navigate = useNavigate();

    const earnPlanStyle = {
        border: "solid 2px #1baedf",
        backgroundColor: '#fff',
        color: '#1baedf'
    }

    const handleSubmit = () => {
        navigate('/aboutMember')
    }

  return (
    <div className="pages_container">


        <div className="form_section" onSubmit={handleSubmit} >
            <h3>How are you planning to earn on KudiTip?</h3>
            <div className="checkbox_container">
                <label className="container">Receive donations or tips
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="checkbox_container">
                <label className="container">Build monthly membership income
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="checkbox_container">
                <label className="container">Sell products
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="checkbox_container">
                <label className="container">Offer commissions or services
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <Button text='Continue' earnPlanStyle={earnPlanStyle}/>
        </div>

    </div>
  )
}
export default EarnPlan