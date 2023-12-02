import { useEffect, useState } from 'react';
import BulbIcon from '../svg/BulbIcon';
import Logo from '../unit_components/Logo';

const CreateUsername = ({ formdata, setFormdata }) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    console.log('Form Data Updated:', formdata);
  }, [formdata]);

  
  const handleChange = (e) => {
    const newUsername = e.target.value;
    setFormdata((prevData) => ({ ...prevData, username: newUsername }))
    setUsername(newUsername);
    
  };


  return (
    <div className="pages_container">
      <div className="logo">
        <Logo />
      </div>
      <form>
        <h4>Choose a username</h4>
        <p>What do you want your link to be?</p>
        <div className="input_case">
          <input value={username} onChange={(e) => handleChange(e)} type="text" />
        </div>
        <div className="bulb_container">
          <BulbIcon />
          <div className="vertical_line"></div>
          <p>You can change this at any time!</p>
        </div>
      </form>
    </div>
  );
};

export default CreateUsername;
