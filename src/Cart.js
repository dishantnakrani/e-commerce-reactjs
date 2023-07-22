import React, { useState, useEffect, useContext } from 'react';
import Layout from './Layout';
import Products from './Products';
import NoteState from './Context/NoteState';
import NoteContext from './Context/NoteContext';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import Cartitem from './Cartitem';


export default function Cart() {

    // const contextReceive = useContext(NoteContext)

    const [cartItems, setCartItems] = useState([])
    const [crack, setCrack] = useState('')
    const [quantity, setQuantity] = useState(1);
    let [total, setTotal] = useState('')



    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('localCart')));

    }, [quantity])




    const handledelete = (id) => {
        console.log(id);
        let updatedItems = cartItems.filter((item) => item.id !== id);

        setCartItems(updatedItems);
        console.log(updatedItems);
        console.log(cartItems);
        setCrack('asf')
        //setCartItems(JSON.parse(localStorage.getItem('localCart')))
        localStorage.setItem('localCart', JSON.stringify(updatedItems));
    }


    // Automatically update the value whenever quantity changes

    const calculateItemTotal = (item) => {
        return quantity * item.discountprice;
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += calculateItemTotal(item);
        });
        return totalPrice;
    };





    return (
        <>
            <Layout>

                <h1 className='text-center cart3'>My cart</h1>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='cart-listing'>
                                <div>
                                    {cartItems && cartItems.length > 0 ? (
                                        cartItems.map((item, index) => (
                                            <Cartitem data={item} remove={handledelete} />

                                            // <div key={index} className='cart-product-container'>
                                            //     <div className='cart-product-image-container'>
                                            //         <img className='image-cart' src={item.thumbnail} />
                                            //     </div>
                                            //     <div className='cart-product-info'>
                                            //         <p className='product-name'>{item.products}</p>

                                            //         <div className="cart-price-info d-flex">
                                            //             <p className="cart-discounted-price discount">{item.discountprice}</p>
                                            //             <p className="cart-price-tag mrp">{item.mrp}</p>
                                            //         </div>

                                            //         <div className='btn-set'>
                                            //             <button className='cart-inc-dec-btn' onClick={() => handleDecrement(item.id)}>-</button>
                                            //             <p>{quantity}</p>
                                            //             <button className='cart-inc-dec-btn' onClick={handleIncrement}>+</button>
                                            //         </div>

                                            //         <button className='cart-delete-btn' onClick={() => handledelete(item.id)}>Delete</button>
                                            //     </div>

                                            // </div>
                                        ))
                                    ) : (
                                        <p>No items in the cart.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-listing'>
                                <h3 className='text-center'>
                                    Cart Summary
                                </h3>
                                <div>
                                    <Button variant="outlined" className='apply' startIcon={<DiscountIcon />}>
                                        Apply Coupon
                                    </Button>
                                </div>
                                <div>
                                    <p>price( {cartItems.length} item)</p>
                                    <p>Total Price: {calculateTotalPrice()}</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </Layout >
        </>


    )
}
