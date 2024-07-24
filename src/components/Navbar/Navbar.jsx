import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search-icon.png'
import profile_icon from '../../assets/profile-icon.png'
import cart_icon from '../../assets/cart-icon.png'
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="nav-container">
            <div className="navbar">
            <Link to='/' reloadDocument>
            <img src={logo} alt="" className="nav-logo"/>
            </Link>
            <div className="page-items">
                <ul>
                    <li><Link to='/creators' reloadDocument style={{textDecoration:'none',color:'#d5d5d5'}}>Creaters</Link></li>
                    <li><Link to='/communities' reloadDocument style={{textDecoration:'none',color:'#d5d5d5'}}>Communities</Link></li>
                    <li><Link to='/' reloadDocument style={{textDecoration:'none',color:'#d5d5d5'}} >Brands</Link></li>
                    <li><Link to='/' reloadDocument style={{textDecoration:'none',color:'#d5d5d5'}}>Promotions</Link></li>
                </ul>
            </div>
            <div className="nav-icons-list">
         <div className="nav-icon">
            <img src={search_icon} alt="" width={20} height={35} />
         </div>
         <div className="nav-icon">
            <img src={profile_icon} alt="" width={20} height={35} />
         </div>
         <div className="nav-icon">
            <img src={cart_icon} alt="" width={20} height={35} />
         </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;
