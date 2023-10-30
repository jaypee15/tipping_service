import React from 'react'
import "./Explore.css"
import feature1 from "../images/feature1.png"
import feature2 from "../images/feature2.png"
import feature3 from "../images/feature3.png"
import feature4 from "../images/feature4.png"
import featuree5 from "../images/featuree5.png"
import feature6 from "../images/feature6.png"
import landing from "../images/landing.png"
import landingmobile from "../images/landingmobile.png"
import Header from '../components/Header'
import Button from '../unit_components/Button'
import Footer from '../components/Footer'
import SoftwareCompanyIcon from '../svg/SoftwareCompanyIcon'
import Microphoneicon from '../svg/Microphoneicon'
import BloggingCompanyIcon from '../svg/BloggingCompanyIcon'
import DesignCompanyIcon from '../svg/DesignCompanyIcon'


const Explore = () => {

  return (
    <div>

          <div>
    {/* Start of navigation */}
    <Header />
    </div>
    {/* Start of landing */}

        {/* navigation */}
        
        {/* Start of landing */}

        <div class="landing">
            <img src={landing} />
        </div>
        <div class="landing-mobile"> <img src={landingmobile} /></div>
        <div class='landing-button'>
                <div class='landing-text'>
                    <h2>Search over 200,000 content creators on KudiTip</h2>
                    </div>
                <div class='search'>
                    <input type="text" placeholder='KudTip/yourname'/>
                    <Button text="Search" className="btn" />
                </div>
            </div>
    {/* End of landing */}

    {/* Start of features */}
        <section className="content">
            <div className="content-item"><p>Blogging</p><BloggingCompanyIcon />
            </div>
            <div className="content-item"><p>Designs</p><DesignCompanyIcon />
            </div>
            <div className="content-item"><p>Software</p><SoftwareCompanyIcon />
            </div>
            <div className="content-item"><p>Artists</p><Microphoneicon />
            </div>
  
        </section>
    {/* End of features */}

    {/* Start of features section1 */}
        <div className="content-text">
            <div class="content-text-left">
                <p><a href="">Popular Content</a></p>
            </div>
            <div className="content-text-right">
                <p><a href="">See all</a></p>
            </div>
        </div>
        
        <section id="feature" >
            <div className='feature'>
                <img src={feature1} />
                <img src={feature2} />
                <img src={feature3} />
                </div>
                <div className='feature1'><img src={feature1} /></div>
        </section>
    {/* End of features section1 */}

    {/* Start of features section2 */}
        <div className="content-text">
            <div class="content-text-left">
                <p><a href="">KudiTip Featured creators</a></p>
            </div>
            <div className="content-text-right">
                <p><a href="">See all</a></p>
            </div>
        </div>
        

        <section id="feature">
            <div className="feature-item">
                <img src={feature4} />
                <h4>Sarah Lonnie</h4>
                <h5>4.1k followers</h5>
                <p>Hello, Im Sarah. I'm a mid 30</p>
                <p>A sport Analyst...</p>
                <p>Sport Analyst</p>
                {/* To be reviewed */}
                <div className="feature-link">
                    <a href="">follow</a>
                </div>
                
            </div>
            <div className="feature-item">
                <img src={featuree5} />
                <h4>Kole Olawale</h4>
                <h5>5.1k followers</h5>
                <p>Hello, Im Kole. I'm a mid 20</p>
                <p>A Relationship doctor...</p>
                <p>Podcaster</p>
                <div className="feature-link">
                    <a href="">follow</a>
                </div>
                 
            </div>
            <div className="feature-item">
                <img src={feature6} />
                    <h4>Ibrahim Balogun</h4>
                    <h5>20k followers</h5>
                    <p>Hello, I'm Wizkid. I'm a late 20</p>
                    <p>A world superstar</p>
                    <p>Music Artist</p>
                <div className="feature-link">
                    <a href="">follow</a>
                 </div>
                
            </div>
            <div className='feature1'>
            <img src={feature4} />
                <h4>Sarah Lonnie</h4>
                <h5>4.1k followers</h5>
                <p>Hello, Im Sarah. I'm a mid 30</p>
                <p>A sport Analyst...</p>
                <p>Sport Analyst</p>
                <div className="feature-link">
                    <a href="">follow</a>
                </div> </div>
        </section>
    {/* End of features section2*/}

    {/* footer */}
    <Footer />
   </div>
    
  );
}

export default Explore

