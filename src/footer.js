import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src="./img/Screenshot 2023-07-19 123841.png" alt="" />
                    </div>
                    <div className="detail">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a nemo dolorum inventore est ut?</p>
                        <div className="icon">
                            <span><BiLogoFacebook /></span>
                            <span><BsInstagram /></span>
                            <span><BsTwitter /></span>
                            <span><BsYoutube /></span>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer