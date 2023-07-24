import React from 'react';
// , { useState } 
import { Link } from 'react-router-dom';
import { BsCurrencyDollar, BsEye } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useAuth0 } from "@auth0/auth0-react";
import './home.css';
import Homeproduct from './homeproduct';

const Home = ({ detail, view, close, setClose, addtocart }) => {
    // const [homeProduct, setHomeProduct] = useState(Homeproduct)
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
        {
            close ? 
            <div className="product-detail">
                <div className="container">
                    <button onClick={ () => setClose(false)} className="close-btn"><IoMdClose /></button>
                    {
                        detail.map((ele) => 
                        {
                            return(
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={ele.Img} alt={ele.Title} />
                                    </div>
                                    <div className="detail">
                                        <h4>{ele.Cat}</h4>
                                        <h2>{ele.Title}</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, nesciunt?</p>
                                        <h3>₹ {ele.Price}</h3>
                                        {
                                             isAuthenticated ? 
                                             <button className='add-to-cart-btn' onClick={() => addtocart (ele)} >Add to Cart</button>
                                             :      
                                             <button className='add-to-cart-btn' onClick={() => loginWithRedirect()} >Login</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> : null
        }
        <div className="top-banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Note Book Collection in 2023</h2>
                    <Link to="/product" className='link'>Shop Now</Link>
                </div>
                <div className="img-box">
                    <img src="./img/slider-img.png" alt="sliderimg" />
                </div>
            </div>
        </div>
        <div className="product-type">
            <div className="container">
                <div className="box">
                    <div className="img-box">
                        <img src="./img/Mobile Phone.png" alt="mobile" />
                    </div>
                    <div className="detail">
                        <p>23 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src="./img/headphone.png" alt="headphone" />
                    </div>
                    <div className="detail">
                        <p>52 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src="./img/cpu.png" alt="cpu" />
                    </div>
                    <div className="detail">
                        <p>63 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src="./img/smart watch.png" alt="watch" />
                    </div>
                    <div className="detail">
                        <p>18 products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund</h3>
                        <p>Money Back Guaranteed</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HiOutlineReceiptPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discounts</h3>
                        <p>On Every Order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>24x7 Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">
            <h2>Top Products</h2>
            <div className="container">
                {
                    Homeproduct.map((ele) => {
                        return(
                            <div className="box" key={ele.id}>
                                <div className="img-box">
                                    <img src={ele.Img} alt={ele.Title} />
                                    <div className="icon">
                                        <span onClick={() => addtocart (ele)}>
                                            <AiOutlineShoppingCart />
                                        </span>
                                        <span onClick={() => view (ele)}>
                                            <BsEye />
                                        </span>
                                        <span>
                                            <AiOutlineHeart />
                                        </span>
                                    </div>
                                </div>
                                <div className="detail">
                                    <p>{ele.Cat}</p>
                                    <h3>{ele.Title}</h3>
                                    <h4>₹ {ele.Price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Home