import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import { BrowserRouter as Router, Routes, Route, BrowserRouter , useLocation } from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AllProducts from './Component/AllProducts';
import HomePage from './Component/HomePage';
import AddProduct from './Component/AddProduct';
import Men from './Component/Men';
import Electronics from './Component/Electronics';
import Women from './Component/Electronics';
import ProductDetails from './Component/ProductDetails';
import HomeAndKitchen from './Component/HomeAndKitchen';
import Cart from './Component/Cart';
import Address from './Component/Address';
import Order from './Component/Order';
import Products from './Component/Products';
import AdminHome from './Component/AdminHome';
import AdminNavbar from './Component/AdminNavbar';
import SuccessPage from './Component/SuccessPage';

function App() {
   
  return (
    <div className="App">

      <BrowserRouter>
      
      <Navbar/> 
   
      <div lassName="container-fluid p-2">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contactus" element={<Contactus />}/>
          <Route path="/addproduct" element={<AddProduct />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/men" element={<Men />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/homeandkitchen" element={<HomeAndKitchen />}/>
          <Route path="/ab" element={<ProductDetails />}/>
          <Route exact path='/products/getproduct/:productId' element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/deliveryaddress" element={<Address />}/>
          <Route path="/order" element={<Order />}/>
          <Route exact path='/products/searchproduct/:pname' element={<Products />}></Route>
          <Route path="/successpage" element={<SuccessPage />}/>
        </Routes>
      </div>
      </BrowserRouter>
      
      <Footer />
        
    </div>
  );
}

export default App;
