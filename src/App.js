import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import Profile from './Profile';
import Wishlist from './Wishlist';


function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
