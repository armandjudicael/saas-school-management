import React from 'react';
import { useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import "../../Ressource/Style/login.css";
const Login = () => {
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');

const login = async (e)=>{
    e.preventDefault();
    console.log(mail,password);
    try{
        await axios.post(`${process.env.REACT_APP_URLBACK}/login`,{
            mail,
            password
        }).then((reponse)=>{
           setMessage(reponse.data.message);
            if(reponse.data.token){
                Navigate("/Dashboard");
            }
        })  
    }catch(e){
        console.log(e);
    }
}
    return (
        <div class="wrapper">
            
            <div className="logo">
                <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""/>
            </div>
            <div className="text-center mt-4 name">
                School
            </div>
             <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="email" id="mail" placeholder="Mail" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            <p>{message}</p>
                <button className="btn mt-3" onClick={login}>Login</button>
            </form>
           <div className="text-center fs-6">
               <span><Link to='/password'>Forget password?</Link> or <Link to='/registre'>Sign up</Link></span>
            </div>
    </div>
    );
};

export default Login;