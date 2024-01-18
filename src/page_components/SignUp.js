
import './SetAccount.css';
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../unit_components/TextInput";
import EmailInput from "../unit_components/EmailInput";
import PasswordInput from "../unit_components/PasswordInput";
import Button from "../unit_components/Button";
import { useEffect, useState } from 'react';
import GoogleCreate from '../components/GoogleCreate';
import Header from '../components/Header';

const SignUp = () => {
    const [signEmail, setSignUpEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');

    const [enteredUsername, setEnteredUsername] = useState('')

    const navigate = useNavigate();

    
    const registerUser = async () => {
        try {
            const response = await fetch('https://kuditip.onrender.com/api/dj-rest-auth/registration/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: enteredUsername,
                    email: signEmail,
                    password1: signPassword,
                    password2: signPassword,
                }),
            });

            if (response.ok) {
                alert("User registered successfully");
                navigate('/signup-form');
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };
    useEffect(() => {
        

        if (signEmail && signPassword.length >= 8) {
            registerUser();
        }
    }, [signEmail, signPassword,enteredUsername, navigate]);

    const getEmail = (mail) => {
        setSignUpEmail(mail);
    }

    const getPassword = (pass) => {
        setSignPassword(pass);
    }

    const handleUsername = (e) => {
        setEnteredUsername(e.target.value)
    }

    const isEmailValid = (email) => {
        // Simple email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        // Validate email format and password length
        if (!isEmailValid(signEmail)) {
            console.error("Invalid email format");
            return;
        }

        if (signPassword.length < 8) {
            console.error("Password must be at least 8 characters long");
            return;
        }

        // If validation passes, proceed with registration
        navigate('/signup-form');
    }

    return (
        <div>
            <Header />
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
                    {/* <TextInput /> */}
                    <input placeholder='username' value={enteredUsername} onChange={handleUsername} />
                    <EmailInput getEmail={getEmail} />
                    <PasswordInput getPassword={getPassword} />
                    <Button text='Create account' className={"button"} />
                </form>
            </section>
            <GoogleCreate />
        </div>
    )
}

export default SignUp;
