import React from 'react'
import './HappyCustomer.css'
import CustomerSlide from '../CustomerSlide/CustomerSlide'
import { Link } from 'react-router-dom'



const HappyCustomer = () => {
    
  return (
    <>
    <section className='HappyCustomer mb-10 px-4 lg:px-0'>
        <div className="container">
            <div className="HappyCustomer_Text_Row">
                <h2>Trusted by Thousands of Happy Customer</h2>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <div className="HappyCustomer_Slider_Row mb-[50px] lg:mb-[100px]">
              <CustomerSlide />
                
                
            </div>
            <div className="subcribe w-[290px] lg:w-[1140px] px-[5px] lg:px-[70px] py-[2px] lg:py-[58px]">
              <div className="subcribe_text_col">
                <h2>Subscribe Now for Get Special Features!</h2>
                <p>Let's subscribe with us and find the fun.</p>


              </div>
              <div className="subscribe_button_col">
                <Link to=''>Subscribe Now</Link>

              </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default HappyCustomer