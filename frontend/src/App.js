import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
        </Routes>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
