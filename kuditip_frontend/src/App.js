import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './page_components/SignUp';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
