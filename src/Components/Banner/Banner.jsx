import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

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

                </div>
               
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Banner