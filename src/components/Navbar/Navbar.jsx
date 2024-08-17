import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_icon from '../../assets/profile_icon.svg'
import cart_icon from '../../assets/cart_icon.svg'
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
                    <li><Link to='/creators' reloadDocument >Creaters</Link></li>
                    <li><Link to='/communities' reloadDocument >Communities</Link></li>
                    <li><Link to='/brands' reloadDocument  >Brands</Link></li>
                    <li><Link to='/' reloadDocument >Promotions</Link></li>
                </ul>
            </div>
            <div className="nav-icons-list">
         <div className="nav-icon">
           <Link to='#'> <img src={search_icon} alt=""  /></Link> 
         </div>
         <div className="nav-icon">
           <Link to='#'><img src={profile_icon} alt=""  /></Link> 
         </div>
         <div className="nav-icon">
            <Link to='#'><img src={cart_icon} alt=""  /></Link>
         </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;
