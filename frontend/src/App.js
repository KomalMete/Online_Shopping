import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Aboutus from './Component/Aboutus';


function App() {
  return (
    <div className="App">
        <Aboutus />
        
    </div>
  );
}

export default App;
