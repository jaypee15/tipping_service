import React from 'react'
import "./FAQ.css"
import search from "../images/search.png"
import Header from '../components/Header'
import Button from '../unit_components/Button'

const FAQ = () => {
  return (
    <div>
      <Header />
      {/* Start of page heading */}
      <div className='faq'>
        <div className='faq-head'>
          <h3>FAQs</h3> <br />
          <h3>Frequently asked questions</h3>
          <p>If you can’t find an answer that you’re looking for, feel free to chat our friendly team. We’re here to help.</p>
        </div>
        <div className='heading-item5'>
          <img src={search} />
          <p>search</p>
        </div>
        {/* <div className='bottom-btn4'>
          <a href=''><p>About us</p></a>
        </div> */}
        <Button text='About us' className='bottom-btn4'/>
      </div>
      
    </div>
  )
}

export default FAQ
