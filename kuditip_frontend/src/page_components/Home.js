import React from 'react'
import group from '../images/group.png'
import line2logo1 from '../images/line2logo1.png'
import line2logo2 from '../images/line2logo2.png'
import line2logo3 from '../images/line3logo1.png'
import line3logo1 from '../images/line3logo1.png'
import line3logo2 from '../images/line3logo2.png'
import line3logo3 from '../images/line3logo3.png'
import tree from '../images/tree.png'
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <>
    {/* Start of first container */}
      <div className='container1'>
        <div className='firstchild'>
       <h3>
          Support the creators you love with a tip. <br />
           It’s just a few clicks away. <br />
           Accept donations start a membership. <br />
           It’s easier than you think.
        </h3>
          <div className='firstchildbtn'>
             <Link>Get started</Link> 
         </div>
        </div>
        <div className='secondchild'>
            <img src={group} alt="group" />
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
                <p>Search</p>
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
           <div>
              <img src={line2logo1} alt="logo" />
              <h5>
                KudiTip offer a variety of tipping <br /> options,
                 such as one-time <br /> tips, recurring tips,
                  and monthly subscriptions.
                  </h5>
           </div>
            
            <div className='thirdimg'>
            <img src={line2logo2} alt="logo" />
              <h5> KudiTip is a platform for all content creators</h5>
            </div>
            
            <div>
            <img src={line2logo3} alt="logo" />
              <h5>KudiTip is a platform that helps <br /> creators Directly  reach out to <br /> followers</h5>
            </div>
        </div>
        
           {/* Discover more button */}
             <div class="discover-more">
              <Link>Discover More</Link>
          </div>
        </div>
     {/* End of what's kuditip */}


       {/*start of Why choose kuditip */}
            <div>
               <div className='whykuditip-header'>
                 <h4>Why choose KudiTip?</h4>
               </div>

               <div className='whykuditip-logo'>
                  <div className='logo1'>
                     <img src={line3logo1} alt="logo" />
                     <h5> Personalised rewards</h5>
                     <h5>Get to see your rewards  and <br />  claim them</h5>
                    </div>

                  <div className='logo2'>
                  <img src={line3logo2} alt="logo" />
                   <h5>News and Messages</h5>
                   <h5> 
                     Interact with your tippers, <br /> 
                    send messages, post news <br />
                    and exclusive content
                 </h5>
                  </div>
               
                  <div className='logo3'>
                  <img src={line3logo3} alt="logo" />
                  <h5>Dashboard</h5>
                  <h5>
                     Monitor the activity <br /> of your  campaign your payments, <br /> 
                    and  find all information  of your Tippers.
                </h5>
                  </div>
               </div>
            </div>

        {/* Start of create kudi page */}
     <div className='createkudiPage'>
          <div className='createkudiPage-btn'>
             <Link>Create KudiTip Page</Link>
         </div>
            <div className='createkudiPage-items'>
            <div>
                <img src={tree} alt="tree-logo" />
            </div>

             <div className='items'>
                 <h4>Who are we?</h4>
                 <h5>
                   KudiTip is the #1 Nigerian platform <br /> of crowdfunding dedicated
                    to content <br /> creators. 
                </h5>
                 <Link>Read more about KudiTip</Link>
            </div>
        </div>
    </div>
       {/*end of create kudi page */}
    </>
  )
}
export default Home
