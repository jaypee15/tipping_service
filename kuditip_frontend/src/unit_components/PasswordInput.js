import { useEffect, useState } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';


const PasswordInput = ({getPassword}) => {

    const [password, setPassword] = useState('');

    const fixPassword = () => {
        if (getPassword) {
            getPassword(password)
        }
    }

    useEffect(() => {
        fixPassword()
    }, [password])

    return (
      <div className="input_case">
        <input 
            name='password'
            required
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <FaLock />
        {/* <FaUnlock /> */}
      </div>
    )
  }
  export default PasswordInput