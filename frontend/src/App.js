import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AllProducts from './Component/AllProducts';
import HomePage from './Component/HomePage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      <div lassName="container-fluid p-2">
        <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contactus" element={<Contactus />}/>
         
        </Routes>
      </div>

     
      </BrowserRouter>
     
        
    </div>
  );
}

export default App;
