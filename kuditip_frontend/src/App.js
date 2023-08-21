import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';
import Login from './page_components/Login';
import Header from './components/Header';
import Home from './page_components/Home'
import Footer from './components/Footer';
import AboutMember from './page_components/AboutMember';


function App() {
  return (
   <div className="App">
    <Header/>
     <Routes>
      <Route path='jkkk' element={<Home/>}/>
      <Route path='signup' element={<SignUp />} />
      <Route path='logo' element={<Login/>}/>
      <Route path='/' element={<AboutMember/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
