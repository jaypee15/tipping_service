import BulbContainer from "../components/BulbContainer"
import BulbIcon from "../svg/BulbIcon"
import CheckedIcon from "../svg/CheckedIcon"
import Button from "../unit_components/Button"
import Logo from "../unit_components/Logo"

const UnlockFeatures = () => {
  return (
    <div className="pages_container">
        <div className="logo">
            <Logo />
        </div>
        <div style={{backgroundColor: "#E0E0E033"}}>
            <h3>Unlock Everything</h3>
            <p>Share 5% of your income to support the community and unlock all the cool features like:</p>
        
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                    Monthly Donations
                </p>
            </div>
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                Custom Colors
                </p>
            </div>
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                Contributior badge 
                </p>
            </div>
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                Scheduled Posts 
                </p>
            </div>
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                More Shop storage 
                </p>
            </div>
            <div className="special_feature">
                <CheckedIcon /> 
                <p style={{marginLeft: "5px"}}>
                Support KudiTip development 
                </p>
            </div>
            <BulbContainer text='You can change this at anytime!' />
            <Button text='Next'/>
        </div>
    </div>
  )
}
export default UnlockFeatures