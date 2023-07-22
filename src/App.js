import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import Profile from './Profile';
import Wishlist from './Wishlist';
import NoteState from './Context/NoteState';
import Cartitem from './Cartitem';


function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            < Route path='/' element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="wishlist" element={<Wishlist />} />

            <Route path="profile" element={<Profile />} />

            <Route path="cart" element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
