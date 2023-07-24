import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './cart.css';

// const stripe = require('stripe')(process.env.STRIPE_KEY)

const Cart = ({ cart, setCart }) => {
    //Increase Quantity
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? {...exist, qty: exist.qty + 1} : ele
        }))
    }

    //Decrease Quantity
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? {...exist, qty: exist.qty - 1} : ele
        }))
    }

    //Remove Product 
    const removeproduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if(exist.qty > 0){
            setCart(cart.filter((x) => {
                return x.id !== product.id
            })
        )}
    }
    //Total Price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
        <div className="cart-container">
            {cart.length === 0 &&
             <div className="empty-cart">
                <h2 className="empty">Your cart is empty 🥺</h2>
                <Link to='/product' className='empty-cart-btn'>Shop Now</Link>
             </div>   
            }
            <div className="content">
                {
                    cart.map((ele) => 
                    {
                        return(
                            <div className="cart-item" key={ele.id}>
                                <div className="img-box"><img src={ele.Img} alt={ele.Title} /></div>
                                <div className="detail">
                                    <div className="info">
                                        <h4>{ele.Cat}</h4>
                                        <h3>{ele.Title}</h3>
                                        <p>₹ {ele.Price}</p>
                                        <div className="qty">
                                            <button className='dec' onClick={() => decqty(ele)}>-</button>
                                            <input type="text" value={ele.qty}/>
                                            <button className='inc' onClick={() => incqty(ele)}>+</button>
                                        </div>
                                        <h4 className='total'>Total: ₹ {ele.Price * ele.qty}</h4>
                                    </div>
                                    <div className="close">
                                        <button onClick={() => removeproduct(ele)}><IoMdClose /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                cart.length > 0 && 
                <>
                    <h2 className="totalprice">Sub Total: ₹ {Totalprice}</h2>
                    <button className="checkout">Checkout</button>
                </>
            }
            
        </div>
    </>
  )
}


export default Cart