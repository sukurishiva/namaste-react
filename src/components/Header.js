import { CDN_LOGO } from "../utils/server";
import { useState } from "react";

const Header=()=>{
    const [loginButton,setLoginButton]=useState("login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img alt='app-logo' className='logo' src={CDN_LOGO}></img>
            </div>
            <div className='nav-container'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button className="login" onClick={()=>{
                        loginButton==="login" ? setLoginButton("logout") :setLoginButton('login')
                    }}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;