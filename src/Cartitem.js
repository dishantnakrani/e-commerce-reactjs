import React, { useState } from 'react'

export default function Cartitem(props) {

    const [quantity, setQuantity] = useState(1)
    let [total, setTotal] = useState('')




    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setTotal(quantity)
        console.log(quantity)
    };

    const handleDecrement = (e) => {
        console.log(e)
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
        setTotal(quantity)
        console.log(quantity)
    };



    total = quantity * props.data.discountprice;




    return (
        <div>
            <div className='cart-product-container'>
                {/* Render the item details */}
                <div className='cart-product-image-container'>
                    <img className='image-cart' src={props.data.thumbnail} />
                </div>
                <div className='cart-product-info'>
                    <p className='product-name'>{props.data.products}</p>

                    <div className="cart-price-info d-flex">
                        <p className="cart-discounted-price discount">{props.data.discountprice}</p>
                        <p className="cart-price-tag mrp">{props.data.mrp}</p>
                    </div>

                    <div className='btn-set'>
                        <button className='cart-inc-dec-btn' onClick={handleDecrement}>-</button>
                        <p>{quantity}</p>

                        <button className='cart-inc-dec-btn' onClick={handleIncrement}>+</button>

                        <p>{total}</p>
                    </div>

                    <button className='cart-delete-btn' onClick={() => props.remove(props.data.id)}>Delete</button>
                </div>



                {/* Add other item properties as needed */}
            </div>

        </div>
    )
}
