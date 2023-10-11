import React from 'react'
import "./Payment.css"
import MyPageHeader from '../components/MyPageHeader'
import SideBar from '../components/SideBar'
import FooterBottom from '../components/FooterBottom'
import Button from '../unit_components/Button'
import Cryptoicon from '../svg/Cryptoicon'
import BankIcon from '../svg/BankIcon'



const Payment = () => {
  return (
    <div>
         <MyPageHeader />
        {/* Start of page container */}
       <div className='payment'>
            <SideBar />
            <div className='payment-body'>
                    <h1>Payout</h1>
                    <p>Oversee and access you payment settings. </p>
                
                <div className='payment-method'>
                    <p>Payment method</p>
                    <div className='edit'><a href='' >Edit</a></div>
                </div>
                <p>Set default payment option</p>
                <div className='sub-container'>
                    <BankIcon/>
                    <div className='sub-container-item'>
                        <p>Bank Account</p>
                        <p>Connect your bank account</p>
                    </div>
                    <Button text='connect' className={"btn"} />
                    {/* <div className='btn'>
                        <a href=''><p>Connect</p></a>
                    </div> */}
                </div>
                <div className='sub-container'>
                    <Cryptoicon />
                    <div className='sub-container-item1'>
                        <p>Cryptocurrency</p>
                        <p>Connect your wallet address</p>
                    </div>
                    <Button text='Connected' className={"btn1"} />
                    {/* <div className='btn1'>
                        <a href=''><p>Connected</p></a>
                    </div> */}
                </div>
                <div className='payment-story'>
                    <h2>Payment history</h2>
                    <p>View the payment history</p>
                    <div className='history'>
                        <p>Date</p>
                        <p>Payment method</p>
                        <p>Status</p>
                        <p>Amount</p>
                    </div>
                    <div className='history-item'>
                        <h5>No payout history</h5>
                    </div>
                </div>
            </div>
        </div>
        {/* End of page container */}

        <FooterBottom companyName={'#2172A3'} fill='#2172A3' />

    </div>
  )
}

export default Payment
