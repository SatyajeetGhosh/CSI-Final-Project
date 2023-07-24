import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TbLogout, TbLogout2 } from 'react-icons/tb';
import { useAuth0 } from "@auth0/auth0-react";
 
import './nav.css';

const Nav = ( {searchbtn} ) => {
    const [ search, setSearch ] = useState();
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
        <div className="free">
            <div className="icon">
                <FaTruckMoving />
            </div>
            <p> 
                Free Shipping
            </p>
        </div>
        <div className="main-header">
            <div className="container">
                <div className="logo">
                    <img src="./img/Screenshot 2023-07-19 123841.png" alt="logo" />
                </div>
                <div className="search-box">
                    <input type="text" value={search} autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
                    <button onClick={() => searchbtn (search)}>Search</button>
                </div>
                <div className="icon">
                    {
                        isAuthenticated &&
                        <div className="account">
                            <div className="user-icon">
                                <AiOutlineUser />
                            </div>
                            <p>Hello, {user.name}</p>
                        </div>
                    }
                    
                    <div className="second-icon">
                        <Link to="/" className='link'><AiOutlineHeart /></Link>
                        <Link to="/cart" className='link'><BsBagCheck /></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="nav">
                    <ul>
                        <li>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/product'>Product</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='auth'>
                    {
                        isAuthenticated ? 
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><TbLogout2 /></button>
                        :
                        <button onClick={() => loginWithRedirect()}><TbLogout /></button>
                    }
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav