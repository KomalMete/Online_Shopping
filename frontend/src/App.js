import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';

function App() {
  return (
    <div className="App">
        <Contactus />
        
    </div>
  );
}

export default App;
