import React from 'react'
import "./Payment.css"
import bankicon from "../images/bankicon.png"
import cryptoicon from "../images/cryptoicon.png"



const Payment = () => {
  return (
    <div>
        {/* Start of page container */}
        <div className='payment-body'>
                <h1>Payout</h1>
                <p>Oversee and access you payment settings. </p>
            
            <div className='payment-method'>
                <p>Payment method</p>
                <div className='edit'><a href='' >Edit</a></div>
            </div>
            <p>Set default payment option</p>
            <div className='sub-container'>
                <img src={bankicon} />
                <div className='sub-container-item'>
                    <p>Bank Account</p>
                    <p>Connect your bank account</p>
                </div>
                <div className='btn'>
                    <a href=''><p>Connect</p></a>
                </div>
            </div>
            <div className='sub-container'>
                <img src={cryptoicon} />
                <div className='sub-container-item1'>
                    <p>Cryptocurrency</p>
                    <p>Connect your wallet address</p>
                </div>
                <div className='btn1'>
                    <a href=''><p>Connected</p></a>
                </div>
            </div>
            <div clasName='payment-history'>
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
        {/* End of page container */}
    </div>
  )
}

export default Payment
