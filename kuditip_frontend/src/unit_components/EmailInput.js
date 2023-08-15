import { FaEnvelope } from 'react-icons/fa';


const EmailInput = () => {
    return (
      <div className="input_case">
        <input 
            name='email'
            type="email" 
            placeholder="Email address"
        />
        <FaEnvelope />
      </div>
    )
  }
  export default EmailInput