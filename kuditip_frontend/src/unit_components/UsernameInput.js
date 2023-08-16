import { IoMdContact } from 'react-icons/io';

const UsernameInput = () => {
    return (
      <div className="input_case">
        <input 
            name='username'
            type="text"
            required 
            placeholder="Username"
        />
        <IoMdContact />
      </div>
    )
  }
  export default UsernameInput