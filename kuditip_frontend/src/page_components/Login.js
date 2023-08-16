import React from 'react'
import EmailInput from '../unit_components/EmailInput'
import PasswordInput from '../unit_components/PasswordInput'
import Button from '../unit_components/Button'
import GoogleCreate from '../components/GoogleCreate'
import { Link } from 'react-router-dom'
import './SignUp.css';



const Login = () => {
  return (
    <div>
        <div className='form_section'>

            <div className="form_heading">

                <h3>Log In</h3>

                <p>

                Already have an account? 

                <Link>
                Signup
                </Link> 
                </p>
            </div>

            <EmailInput/>
            <PasswordInput/>
            <Button Login='Login'/>
            <GoogleCreate/>
            <p>Forgot your password?</p>

        </div>
    </div>
  )
}

export default Login
