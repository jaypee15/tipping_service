import React from 'react'
import rafiki1 from '../images/rafiki1.png'
import rafiki2 from '../images/rafiki2.png'
import rafiki3 from '../images/rafiki3.png'
import tree from '../images/Tree.png'
import "./Home.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../unit_components/Button'
import social_group from '../images/social_group.png'
import Decoration from '../svg/Decoration'
import Speaker from '../svg/Speaker'
import DashbroadPath from '../svg/DashbroadPath'


function Home() {
  return (
    <>
    <Header />
    {/* Start of first container */}
      <div className='container1'>
        <div className='firstchild'>
          <p>
            Support the creators you love with a tip.
            It’s just a few clicks away.
            Accept donations start a membership.
            It’s easier than you think.
          </p>
          <Button text='Get started' className='firstchildbtn' onClick={''}/>
        </div>
        <div className='secondchild'>
          <img src={social_group} alt="group" />
        </div>
      </div> 
         {/* End of first container */}

    {/* Start of search input */}
         <div className='searchinput'>
              <div className='textforsearch'>
                <h5>Search over 200,000 content creators on KudiTip</h5>
                </div>
              <div className='inputsearch'>
                <input type="text" placeholder='kudutip/yourname'/>
                <Button text='Search' className={'inputsearch_btn'}/>
                {/* <p>Search</p> */}
              </div>
         </div>
    {/* End of search input  */}


    {/* Start of what's kuditip */}
        <div className='whatskuditip'>
             <div>
                 <h5>
                    What is KudiTip? <br />
                     <span>KudiTip is a platform that makes it easier for users to tip their favorite creator with ease.</span>
                 </h5>
             </div>
           
           <div className='whatskuditip-logo'>
           <div className='whatskuditip_purpose'>
              <img src={rafiki1} alt="logo" />
              <p>
                KudiTip offer a variety of tipping options,
                such as one-time tips, recurring tips,
                and monthly subscriptions.
              </p>
           </div>
            
            <div className='whatskuditip_purpose thirdimg'>

              <img src={rafiki2} alt="logo" />
              <p> KudiTip is a platform for all content creators</p>
            </div>
            
            <div className='whatskuditip_purpose'>
              <img src={rafiki3} alt="logo" />
              <p>KudiTip is a platform that helps creators Directly reach out to followers</p>
            </div>
        </div>
        
           {/* Discover more button */}
          <Button text="Discover More" className={'discover-more'} />
        </div>
     {/* End of what's kuditip */}


       {/*start of Why choose kuditip */}
      <div>
        <div className='whykuditip-header'>
          <h4>Why choose KudiTip?</h4>
        </div>

        <div className='whykuditip-logo'>
          <div className='logo1'>
            <Decoration />
            <h5> Personalised rewards</h5>
            <h5>Get to see your rewards  and  claim them</h5>
            </div>

        <div className='logo2'>
          <Speaker />
        <h5>News and Messages</h5>
        <h5> 
          Interact with your tippers, 
          send messages, post news 
          and exclusive content
        </h5>
        </div>
        
        <div className='logo3'>
          <DashbroadPath />
        <h5>Dashboard</h5>
        <h5>
          Monitor the activity of your  campaign your payments, 
          and  find all information  of your Tippers.
        </h5>
          </div>
        </div>
      </div>

    {/* Start of create kudi page */}
    <div className='createkudiPage'>

      <Button text='Create KudiTip Page' className={'createkudiPage-btn'} />
      <div className='createkudiPage-items'>
        <div>
          <img src={tree} alt="tree-logo" />
        </div>

        <div className='items'>
          <h4>Who are we?</h4>
          <p>
            KudiTip is the #1 Nigerian platform of crowdfunding dedicated to content creators. 
          </p>
          <Button text='Read more about KudiTip'/>
        </div>
      </div>
    </div>
    <Footer />
       {/*end of create kudi page */}
    </>
  )
}
export default Home
