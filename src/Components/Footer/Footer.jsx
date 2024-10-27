import React from 'react'
import './Footer.css'
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer bg-[#F8F8F8] pb-[70px] lg:pb-[120px] px-4'>
        <div className="container">
            <div className="foort_row flex flex-wrap justify-around">
                <div className="footer_logo_col mb-[20px] lg:mb-0">
                    <div className="footer_logo">
                        <img className='w-[100px] lg:w-[149px] h-[28px] lg:h-[36px]' src="images/Logo.png" alt="logo" />
                    </div>
                    <div className="footer_logo_text">
                        <p><span className='font-medium'>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                    </div>
                    <div className="social_media">
                    <div className="footer_social_media flex flex-wrap gap-[12px] lg:gap-[20px]">
                        <div><BiLogoFacebook className='w-[25px] lg:w-[33px] h-[25px] lg:h-[33px] border-none bg-white text-[#F53838]' /></div>
                        <div><FaTwitter className='w-[25px] lg:w-[33px] h-[25px] lg:h-[33px] bg-white text-[#F53838]' /></div>
                        <div><ImInstagram className='w-[25px] lg:w-[33px] h-[25px] lg:h-[33px] bg-white text-[#F53838]' /></div>

                    </div>
                    <div className="copy_right">
                        <p>©2020Lasles <span className='font-medium'>VPN</span> </p>
                    </div>

                    </div>
                    

                </div>
                <div className="footer_product_col pr-[10px] lg:pr-0">
                    <div className="product_head">
                        <h2>Product</h2>
                    </div>
                    <div className="product_list">
                        <ul>
                            <li><Link to=''> Download</Link>  </li>
                            <li><Link to=''> Pricing</Link>  </li>
                            <li><Link to=''> Locations</Link>  </li>
                            <li><Link to=''> Server</Link>  </li>
                            <li><Link to=''> Countries</Link>  </li>
                            <li><Link to=''> Blog</Link>  </li>
                        </ul>
                    </div>

                </div>
                <div className="footer_engage_col">
                <div className="product_head">
                        <h2>Engage</h2>
                    </div>
                    <div className="product_list">
                        <ul>
                            <li><Link to=''> LaslesVPN ? </Link>  </li>
                            <li><Link to=''> FAQ</Link>  </li>
                            <li><Link to=''> Tutorials</Link>  </li>
                            <li><Link to=''> About Us</Link>  </li>
                            <li><Link to=''> Privacy Policy</Link>  </li>
                            <li><Link to=''> Terms of Service</Link>  </li>
                        </ul>
                    </div>

                </div>
                <div className="footer_earn_money_col">
                <div className="product_head">
                        <h2>Earn Money</h2>
                    </div>
                    <div className="product_list">
                        <ul>
                            <li><Link to=''> Affiliate</Link>  </li>
                            <li><Link to=''> Become Partner</Link>  </li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>

      </footer>
    
    </>
  )
}

export default Footer