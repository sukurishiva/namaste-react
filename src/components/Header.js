import { CDN_LOGO } from "../utils/server";
const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Header;