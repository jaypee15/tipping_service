import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';
import Login from './page_components/Login';
import Home from './page_components/Home'
import AboutMember from './page_components/AboutMember';
import CreateUsername from './page_components/CreateUsername';
import AcctType from './page_components/AcctType';
import EarnPlan from './page_components/EarnPlan';
import UploadProfilePic from './page_components/UploadProfilePic';
import Interest from './page_components/Interest';
import UnlockFeatures from './page_components/UnlockFeatures';
// import MyPageHeader from './components/MyPageHeader';
import Settings from './page_components/Settings';
import Payment from './page_components/Payment';
import Gallery from './page_components/Gallery';
import Donation from './page_components/Donation';
import Message from './page_components/Message';
import Membership from './page_components/Membership';
import FAQ from './page_components/FAQ';
import Error from './page_components/Error';
import Explore from './page_components/Explore';
import AboutUs from './page_components/AboutUs';
import MyAccount from './page_components/MyAccount';
import MyPageHome from './page_components/MyPageHome';
// import MyPageHome from './components/MyPageHeader';




function App() {
  return (
   <div className="App">
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/aboutMember' element={<AboutMember/>}/>
      <Route path='/createUsername' element={<CreateUsername/>}/>
      <Route path='/acctType' element={<AcctType/>}/>
      <Route path='/earnPlan' element={<EarnPlan/>}/>
      <Route path='/uploadProfilePic' element={<UploadProfilePic/>}/>
      <Route path='/interest' element={<Interest/>}/>
      <Route path='/unlockFeatures' element={<UnlockFeatures/>}/>
      <Route path='/myPage' element={<MyPageHome/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path="*" element={<Error />} />


      <Route path='/hj' element={<Message/>}/>


      <Route path='/ghjk' element={<Settings/>}/>

      <Route path='/' element={<Donation/>}/>



      {/* <Route path='/ghjk' element={<MyPageHeader/>}/> */}



      <Route path='/njkl' element={<Payment/>}/>
      <Route path='/ghjk' element={<Gallery/>}/>
      <Route path='/n' element={<Donation/>}/>
      <Route path='/Membership' element={<Membership/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/ghhh' element={<Error/>}/>
      <Route path='/myPage' element={<MyPageHeader/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/' element={<MyAccount/>}/>
      {/* <Route path='/' element={<MyPageHeader/>}/> */}
      <Route path='/ghjk' element={<Explore/>}/>
     </Routes>
    </div>
  );
}

export default App;
