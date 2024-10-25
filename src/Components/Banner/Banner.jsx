import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import CommonCounter from '../Common/CommonCounter'
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
    <section className='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_info">
                  <div className="banner_text_col">
                    <h1>Want anything to be easy with <span className='font-bold'>LaslesVPN.</span> </h1>
                    <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <Link to=''>Get Started</Link>


                  </div>
                  <div className="banner_img_col">
                    <img src="images/banner_img.png" alt="Banner_image" />

                  </div>

                </div>
                <div className="banner_counter">
                  <div className='w-[190px]'>
                  <CommonCounter countIcon={<FaUser className='w-[24px] h-[24] text-[#F53838]' />} countNumber={90} countPlus={'+'} countText={'Users'} />

                  </div>
                  <div>
                    <span className='w-[2px] h-[125px] lg:block bg-[#EEEFF2]'></span>

                  </div>
                  <div className='w-[190px]'>
                    <CommonCounter countIcon={<FaLocationDot className='w-[24px] h-[24] text-[#F53838]' />} countNumber={30} countPlus={'+'} countText={'Locations'} /> 
                  </div>
                  <div>
                     <span className='w-[2px] h-[125px] lg:block bg-[#EEEFF2]'></span>

                  </div>
                  <div className='w-[190px]'>
                    <CommonCounter countIcon={<FaServer className='w-[24px] h-[24] text-[#F53838]' />} countNumber={50} countPlus={'+'} countText={'Servers'} />
                  </div>
                   

                </div>
               
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Banner