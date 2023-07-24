import React from 'react';
import Productdetail from './productdetails';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css';

const Product = ({ product, setProduct, detail, view, close, setClose, addtocart }) => {
    
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const filterproduct = (product) => {
        const update = Productdetail.filter((x) => 
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(Productdetail)
    }
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
        <div className="products">
            <h2>Products</h2>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={() => AllProducts ()}>All Products</li>
                            <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
                            <li onClick={() => filterproduct ("Smart Watch")}>Smart Watch</li>
                            <li onClick={() => filterproduct ("Headphone")}>Headphone</li>
                            <li onClick={() => filterproduct ("Camera")}>Camera</li>
                            <li onClick={() => filterproduct ("Gaming")}>Gaming</li>
                        </ul>
                    </div>
                </div>
                <div className="productbox">
                    <div className="cont">
                        {
                            product.map((ele) => 
                            {
                                return(
                                    <>
                                        <div className="box" key={ele.id}>
                                            <div className="img-box">
                                                <img src={ele.Img} alt={ele.Title} />
                                                <div className="icon">
                                                    {
                                                        isAuthenticated ? 
                                                        <span onClick={() => addtocart (ele)}>
                                                            <AiOutlineShoppingCart />
                                                        </span> 
                                                        :
                                                        <span onClick={() => loginWithRedirect()}>
                                                            <AiOutlineShoppingCart />
                                                        </span> 
                                                    }
                                                   
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
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product