import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import LogoWithName from '../svg/LogoWithName';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <LogoWithName Kcolor='#fff'/>
        <div>
          <h5>About KudiTip</h5>
          <Link to="#">Who are we?</Link> <br />
          <Link to="#">Terms and Conditions</Link> <br />
          <Link to="#">Privacy policy</Link>
        </div>
        <div>
          <h5>Use KudiTip with</h5>
          <Link to="#">Twitter</Link> <br />
          <Link to="#">Instagram</Link> <br />
          <Link to="#">Facebook</Link> <br />
          <Link to="#">YouTube</Link>
        </div>
        <div className='resources'>
          <h5>Resources</h5>
          <Link to="#">Become a creator</Link> <br />
          <Link to="#">Membership</Link> <br />
          <Link to="#">Donations</Link> <br />
          <Link to="#">KudiTip shop and Commission</Link>
        </div>
        <div>
          <h5>Help & Support</h5>
          <Link to="#">Help</Link> <br />
          <Link to="#">F.A.Q</Link> <br />
          <Link to="#">Contact us</Link>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default Footer;
