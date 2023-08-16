import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';
import Login from './page_components/Login';
import Header from './components/Header';


function App() {
  return (
   <div className="App">
    <Header/>
     <Routes>
      <Route path='signup' element={<SignUp />} />
      <Route path='/' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
