import BulbContainer from "../components/BulbContainer";
import ArrowRight from "../svg/ArrowRight"
import BulbIcon from "../svg/BulbIcon";
import Logo from "../unit_components/Logo"
import './SetAccount.css';
import { useNavigate } from "react-router-dom";


const AcctType = () => {
    const navigate = useNavigate();
    const text_margin= {
        // marginRight: "30%"
    }

  return ( 
    <div className="pages_container">

         
        <h4>I’m here to...</h4>
        <div className="acct_type" onClick={() => {navigate('/earnPlan')}}>
            <div>
                <h3>Make money on KudiTip</h3>
                <p>as a creator or fundraiser</p>
            </div>
            <span>
                <ArrowRight />
            </span>
        </div>
        <div className="acct_type">
            <div>
                <h3>Support others</h3>
                <p>to help creators do what they love</p>
            </div>
            <span>
                <ArrowRight />
            </span>
        </div>

        <div className="AcctType_bulb">
            <BulbIcon />
            <div className="vertical_line"></div>
            <p className="bulb_text" style={text_margin}>Everyone can give support and you can change your account type at any time.</p>
        </div>
    </div>
  )
}
export default AcctType