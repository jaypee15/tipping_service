import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';
import Login from './page_components/Login';
import Header from './components/Header';
import Home from './page_components/Home'
import Footer from './components/Footer';
import AboutMember from './page_components/AboutMember';
import CreateUsername from './page_components/CreateUsername';
import SetAccount from './page_components/SetAccount';
import AcctType from './page_components/AcctType';
import EarnPlan from './page_components/EarnPlan';
import UploadProfilePic from './page_components/UploadProfilePic';
import Interest from './page_components/Interest';
import UnlockFeatures from './page_components/UnlockFeatures';


function App() {
  return (
   <div className="App">
    {/* <Header/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signUp' element={<SignUp />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/aboutMember' element={<AboutMember/>}/>
      <Route path='/createUsername' element={<CreateUsername/>}/>
      <Route path='/acctType' element={<AcctType/>}/>
      <Route path='/earnPlan' element={<EarnPlan/>}/>
      <Route path='/uploadProfilePic' element={<UploadProfilePic/>}/>
      <Route path='/interest' element={<Interest/>}/>
      <Route path='/unlockFeatures' element={<UnlockFeatures/>}/>


      <Route path='hgfd' element={<SetAccount/>}/>
      
     </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
