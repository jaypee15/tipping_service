import React from 'react'
import "./Explore.css"
import feature1 from "../images/feature1.png"
import feature2 from "../images/feature2.png"
import feature3 from "../images/feature3.png"
import feature4 from "../images/feature4.png"
import featuree5 from "../images/featuree5.png"
import feature6 from "../images/feature6.png"
import textlogo from "../images/textlogo.png"
import landing from "../images/landing.png"
import logo2 from "../images/logo2.png"
import blog from "../images/blog.png"
import design from "../images/design.png"
import Software from "../images/Software.png"
import Aartists from "../images/Aartists.png"
import landingmobile from "../images/landingmobile.png"
import Groupicon from "../images/Groupicon.png"


const Explore = () => {

  return (
    <div>
          <div>
    {/* Start of navigation */}
        <header class="nav-icon">
            <div class="nav-icon-left">
                <div id="logo">
                <img src={textlogo} />
                </div>
            </div>
            <div class="nav-icon-right">
                <p><a href="">Explore</a></p>
                <p><a href="">About Us</a></p>
                <p><a href="">Blog</a></p>
                <p><a href="">Log In</a></p>
                <div class="btn"><a href="">Sign Up</a></div>
            </div>
            <div class="menu-bar"><i class="fas fa-bars"></i></div>
        {/* End of navigation */}
    </header>
    </div>
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
                    <a href="" class="btn">Search</a>
                </div>
            </div>
    {/* End of landing */}

    {/* Start of features */}
        <section class="content">
            <div class="content-item"><p><a href="">Blogging <img src={blog} /></a></p>
            </div>
            <div class="content-item"><p><a href="">Designs <img src={design} /></a></p>
            </div>
            <div class="content-item"><p><a href="">Softwares <img src={Software} /></a></p>
            </div>
            <div class="content-item"><p><a href="">Artists <img src={Aartists} /></a></p>
            </div>
            <div class="content-item2"><p><a href=""> <img src={Groupicon} /></a></p>
            </div>
            <div class="content-item1"><p><a href="">Blogging <img src={blog} /></a></p>
            </div>
        </section>
    {/* End of features */}

    {/* Start of features section1 */}
        <div class="content-text">
            <div class="content-text-left">
                <p><a href="">Popular Content</a></p>
            </div>
            <div class="content-text-right">
                <p><a href="">See all</a></p>
            </div>
        </div>
        <section id="features" >
            <div className='features'>
                <img src={feature1} />
                <img src={feature2} />
                <img src={feature3} />
                </div>
                <div className='features1'><img src={feature1} /></div>
        </section>
    {/* End of features section1 */}

    {/* Start of features section2 */}
        <div class="content-text">
            <div class="content-text-left">
                <p><a href="">KudiTip Featured creators</a></p>
            </div>
            <div class="content-text-right">
                <p><a href="">See all</a></p>
            </div>
        </div>
        <section id="features">
            <div class="features-item">
                <img src={feature4} />
                <h4>Sarah Lonnie</h4>
                <h5>4.1k followers</h5>
                <p>Hello, Im Sarah. I'm a mid 30</p>
                <p>A sport Analyst...</p>
                <p>Sport Analyst</p>
                <div class="features-link">
                    <a href="">follow</a>
                </div>
            </div>
            <div class="features-item">
                <img src={featuree5} />
                <h4>Kole Olawale</h4>
                <h5>5.1k followers</h5>
                <p>Hello, Im Kole. I'm a mid 20</p>
                <p>A Relationship doctor...</p>
                <p>Podcaster</p>
                <div class="features-link">
                    <a href="">follow</a>
                </div>
            </div>
            <div class="features-item">
                <img src={feature6} />
                    <h4>Ibrahim Balogun</h4>
                    <h5>20k followers</h5>
                    <p>Hello, I'm Wizkid. I'm a late 20</p>
                    <p>A world superstar</p>
                    <p>Music Artist</p>
                <div class="features-link">
                    <a href="">follow</a>
                 </div>
                
            </div>
            <div className='features1'>
            <img src={feature4} />
                <h4>Sarah Lonnie</h4>
                <h5>4.1k followers</h5>
                <p>Hello, Im Sarah. I'm a mid 30</p>
                <p>A sport Analyst...</p>
                <p>Sport Analyst</p>
                <div class="features-link">
                    <a href="">follow</a>
                </div> </div>
        </section>
    {/* End of features section2*/}

    {/* Start of footer */}
        <footer id="footer-menu">
            <div class="footer-menu">
                <div class="footer-menu-item1">
                    <img src={logo2} />
                    <p>KudiTip</p>
                </div>
                <div class="footer-menu-item">
                    <h4>About KudiTip</h4>
                    <p><a href="">Who are we</a></p>
                    <p><a href="">Terms and Conditions</a></p>
                    <p><a href="">Privacy policy</a></p>
                </div>
                <div class="footer-menu-item">
                    <h4>Use KudiTip with</h4>
                    <p><a href="">Twitter</a></p>
                    <p><a href="">Instagram</a></p>
                    <p><a href="">Facebook</a></p>
                    <p><a href="">YouTube</a></p>
                </div>
                <div class="footer-menu-item">
                    <h4>Resources</h4>
                    <p><a href="">Become a creator</a></p>
                    <p><a href="">Membership</a></p>
                    <p><a href="">Donations</a></p>
                    <p><a href="">KudiTip shop and commission</a></p>
                </div>
                <div class="footer-menu-item">
                    <h4>Help & Support</h4>
                    <p><a href="">Help</a></p>
                    <p><a href="">F.A.Q</a></p>
                    <p><a href="">Contact us</a></p>
                </div>
            </div>
            <hr />
            <div class="bottom-footer">
                <p><i class="fa fa-copyright"></i>2023</p>
                <img src={logo2} />
                <p>KudiTip</p>
            </div>
        
        </footer>
    {/* End of footer */}
   </div>
    
  );
}

export default Explore

