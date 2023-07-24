import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './contact.css';

const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [ users, setUser ] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const sendData = async (e) => 
    {
        const{ Name, Email, Subject, Message } = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = fetch('https://e-commerce-contact-f46b9-default-rtdb.firebaseio.com/Message.json', options)
        if(res)
        {
            alert("Message Sent");
        }else{
            alert("Error");
        }
    }
  return (
    <>
        <div className="contact-container">
            <div className="content">
                <h2>Contact</h2>
                <div className="form">
                    <form method="POST">
                        <input type="text" name='Name' placeholder='Your Name' value={users.Name} required autoComplete='off' onChange={data}/>
                        <input type="email" name='Email' placeholder='Your Email' value={users.Email} required autoComplete='off' onChange={data}/>
                        <input type="text" name='Subject' placeholder='Your Subject' value={users.Subject} required autoComplete='off' onChange={data}/>
                        <textarea name="Message" value={users.Message} cols="30" rows="5" placeholder='Your Message' required autoComplete='off' onChange={data}></textarea>
                        {
                            isAuthenticated ? 
                            <button type='submit' onClick={sendData}>Send</button>
                            : <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact