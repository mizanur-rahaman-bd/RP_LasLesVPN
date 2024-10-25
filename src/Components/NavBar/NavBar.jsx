import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav'




const NavBar = () => {
  return (
    <>
      <nav className='pt-[50px]'>
      <div className="container">
            <div className="nav_row flex justify-between items-center">
                <div className="logo px-4 lg:px-0">
                    <img className='w-[100px] lg:w-[149px] ' src="images/Logo.png" alt="Logo" />                   

                </div>
                <div className="menu_without_logo">
                  <div className="menu_withlogo_row flex gap-[150px] items-center">
                  <div className="menu_content ">
                  <ul className='flex gap-[40px]'>
                    <li><Link to=''>About</Link></li>
                    <li><Link to=''>Features</Link></li>
                    <li><Link to=''>Pricing</Link></li>
                    <li><Link to=''>Testimonials</Link></li>
                    <li><Link to=''>Help</Link></li>
                  </ul>              

                </div>
                <div className="sign_up_link">
                  <Link className='py-[13px] px-[45px] text' to=''>Sign In</Link>
                  <Link className='py-[13px] px-[45px] text' to=''>Sign Up</Link>

                </div>

                  </div>
                

                </div>
                
                <ResponsiveNav />
            </div>
        </div>

      </nav>


      
        
      
    
    </>
  )
}

export default NavBar