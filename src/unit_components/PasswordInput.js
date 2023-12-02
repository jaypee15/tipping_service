import { useEffect, useState } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';


const PasswordInput = ({getPassword}) => {

    const [showPassword, setShowPassword] = useState(true);

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
            type={showPassword ? 'password' : 'text'} 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>

            {
                showPassword ? <FaLock /> : <FaUnlock />
            }

        </span>

      </div>
    )
  }
  export default PasswordInput