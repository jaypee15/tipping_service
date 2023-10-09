import './SetAccount.css';
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../unit_components/TextInput";
import EmailInput from "../unit_components/EmailInput";
import PasswordInput from "../unit_components/PasswordInput";
import Button from "../unit_components/Button";
// import google from '../images/frame_20.png'
import { useState } from 'react';
import GoogleCreate from '../components/GoogleCreate';
import Header from '../components/Header';


const SignUp = () => {

    const [signEmail, setSignUpEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');

    const navigate = useNavigate();
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
        navigate('/acctType')
    }

  return (
    <div>

        <Header/>

        <section className="form_section">

            <div className="form_heading">

                <h3>Sign Up</h3>

                <p>

                    Already have an account? 

                    <Link to="/login">
                        Log In
                    </Link> 
                </p>

            </div>

            <form className='sign_form' onSubmit={handleSignUp}>

                <TextInput />

                <EmailInput getEmail={getEmail}/>

                <PasswordInput getPassword={getPassword}/>

                <Button text='Create account' className={"button"} />

            </form> 


        </section>
        
       <GoogleCreate/>

    </div>
  )
}
export default SignUp