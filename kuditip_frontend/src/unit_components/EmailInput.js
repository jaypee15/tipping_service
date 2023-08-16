import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';


const EmailInput = ({getEmail}) => {

    const [email, setEmail] = useState('');

    const fixEmail = () => {
        if (getEmail) {
            getEmail(email)
        }
    }

    useEffect(() => {
        fixEmail()
    }, [email])

    return (
      <div className="input_case">
        <input 
            name='email'
            type="email" 
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <FaEnvelope />
      </div>
    )
  }
  export default EmailInput