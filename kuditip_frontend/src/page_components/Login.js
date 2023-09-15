import React, { useState } from 'react'
import EmailInput from '../unit_components/EmailInput'
import PasswordInput from '../unit_components/PasswordInput'
import Button from '../unit_components/Button'
import GoogleCreate from '../components/GoogleCreate'
import { Link } from 'react-router-dom'
import './SetAccount.css';
import Header from '../components/Header'


const Login = () => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const getEmail = (mail) => {
    setLoginEmail(mail);
  }

  const getPassword = (pass) => {
    setLoginPassword(pass);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail);
    console.log(loginPassword);
  }

  return (
    <div>
      
      <Header />

      <section className='form_section'>

        <div className="form_heading">

          <h3>Log In</h3>

          <p>

            Already have an account? 

            <Link>
              Signup
            </Link> 

          </p>

        </div>

        <form className='sign_form' onSubmit={handleLogin}>

          <EmailInput getEmail={getEmail} />
          <PasswordInput getPassword={getPassword} />
          <Button text='Login'/>
          <GoogleCreate/>
          <p>Forgot your password?</p>

        </form>

      </section>

    </div>
  )
}

export default Login
