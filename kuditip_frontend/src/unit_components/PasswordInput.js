import { FaLock, FaUnlock } from 'react-icons/fa';


const PasswordInput = () => {
    return (
      <div className="input_case">
        <input 
            name='password'
            type="password" 
            placeholder="Password"
        />
        <FaLock />
        {/* <FaUnlock /> */}
      </div>
    )
  }
  export default PasswordInput