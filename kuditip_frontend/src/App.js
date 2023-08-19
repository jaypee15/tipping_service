import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';
import Login from './page_components/Login';
import Header from './components/Header';
import Home from './page_components/Home'
import Footer from './components/Footer';


function App() {
  return (
   <div className="App">
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup' element={<SignUp />} />
      <Route path='logo' element={<Login/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
