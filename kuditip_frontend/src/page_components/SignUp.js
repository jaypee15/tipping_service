import './SignUp.css';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import UsernameInput from "../unit_components/UsernameInput";
import EmailInput from "../unit_components/EmailInput";
import PasswordInput from "../unit_components/PasswordInput";
import Button from "../unit_components/Button";
import google from '../images/frame_20.png'
import { useState } from 'react';


const SignUp = () => {

    const [signEmail, setSignUpEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');


    const getEmail = (mail) => {
        setSignUpEmail(mail);
    }

    const getPassword = (pass) => {
        setSignPassword(pass);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(signEmail);
        console.log(signPassword);
    }

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

            <form className='sign_form' onSubmit={handleSignUp}>

                <UsernameInput />

                <EmailInput getEmail={getEmail}/>

                <PasswordInput getPassword={getPassword}/>

                <Button signUpName='Create account'/>

            </form> 

            <div className='google_create'>

                <p>
                    Or
                </p>

                <img src={google} alt="google_acct" />

            </div>

        </div>

    </div>
  )
}
export default SignUp