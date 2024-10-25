import React, { useState } from 'react'
import './ResponsiveNav.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
  const [show, setShow] = useState(false)



  return (
    
    <>
    <section className='responsiveNave px-4'>
        <div>
        <TfiMenuAlt onClick={()=> setShow(!show)} className='w-[25px] h-[25px] text-black font-bold' />
        </div>

        {
          show&&
          <div className="resmenu">
            <div className="res_menu_content ">
                  <ul className=''>
                    <li><Link to=''>About</Link></li>
                    <li><Link to=''>Features</Link></li>
                    <li><Link to=''>Pricing</Link></li>
                    <li><Link to=''>Testimonials</Link></li>
                    <li><Link to=''>Help</Link></li>
                  </ul>              

                </div>
                <div className="res_sign_up_link">
                  <Link className='' to=''>Sign In</Link>
                  <Link className='' to=''>Sign Up</Link>

                </div>

          </div>
        }

    </section>
    
    </>
  )
}

export default ResponsiveNav