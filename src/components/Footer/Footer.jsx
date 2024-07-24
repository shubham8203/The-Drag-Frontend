import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/Facebook.png'
import instagram_icon from '../../assets/Instagram.png'
import linkedin_icon from '../../assets/linkedin.png'
import twitter_icon from '../../assets/Twiter.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-upper'>
             <p>DRAG</p>
             <hr />
        </div>
        <div className="footer-lower">
            <div className="list">
                <ul>
                    <li>Creators</li>
                    <li>Brands</li>
                    <li>Communities</li>
                    <li>Promotions</li>
                </ul>
            </div>
            <div className="social-media-handles">
                <img src={facebook_icon} alt="" />
                <img src={linkedin_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <div className='list'>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditons</li>
                    <li>Policies</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
