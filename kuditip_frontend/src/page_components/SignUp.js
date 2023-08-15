import './SignUp.css';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import UsernameInput from "../unit_components/UsernameInput";
import EmailInput from "../unit_components/EmailInput";
import PasswordInput from "../unit_components/PasswordInput";
import Button from "../unit_components/Button";


const SignUp = () => {
  return (
    <div>

        <Header />

        <div className="form_section">

            <div className="form_heading">

                <h3>Sign Up</h3>

                <p>

                    Already have an account? 

                    <Link>
                        Log In
                    </Link> 
                </p>

            </div>

            <UsernameInput />
            <EmailInput />
            <PasswordInput />
            <Button /> 

        </div>

    </div>
  )
}
export default SignUp