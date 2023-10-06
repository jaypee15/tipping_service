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
import MyPageHeader from './page_components/MyPageHeader';
import Settings from './page_components/Settings';
import Payment from './page_components/Payment';
import Gallery from './page_components/Gallery';
import Donation from './page_components/Donation';
import Message from './page_components/Message';
import Membership from './page_components/Membership';
import FAQ from './page_components/FAQ';
import Error from './page_components/Error';


function App() {
  return (
   <div className="App">
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='signUp' element={<SignUp />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/aboutMember' element={<AboutMember/>}/>
      <Route path='/createUsername' element={<CreateUsername/>}/>
      <Route path='/acctType' element={<AcctType/>}/>
      <Route path='/earnPlan' element={<EarnPlan/>}/>
      <Route path='/uploadProfilePic' element={<UploadProfilePic/>}/>
      <Route path='/interest' element={<Interest/>}/>
      <Route path='/unlockFeatures' element={<UnlockFeatures/>}/> 
      <Route path='MyPageHeader/myPage' element={<MyPageHeader/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Donation' element={<Donation/>}/>
      <Route path='/Message' element={<Message/>}/>
      <Route path='/Membership' element={<Membership/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/' element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
