import React from 'react'
import './Plan.css'
import { Link } from 'react-router-dom'

const Plan = () => {
  return (
    <>
    <section className='plan px-4 lg:px-0 pt-[40px] lg:pt-[80px] mb-[60px] lg:mb-[150px]'>
        <div className="container">
            <div className="plan_text_row">
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className="plan_card flex flex-wrap gap-[20px] lg:gap-0 justify-evenly">
                <div className="plan_single_card">
                    
                    <img className='inline-block' src="images/FreePlan_img.png" alt="" />
                    <h3>Free Plan</h3>
                    <div>
                    <ul className='text-left mb-[60px] lg:mb-[130px]'>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Unlimited Bandwitch</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Encrypted Connection</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />No Traffic Logs</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Works on All Devices</li>
                    </ul>

                    </div>
                    <h2 className='font-Rubik font-medium text-[25px] text-[#0B132A] mb-[25px]'>Free</h2>
                    <Link to=''>Select</Link>

                    
                    


                </div>
                <div className="plan_single_card">
                    
                    <img className='inline-block' src="images/StandardPlan_img.png" alt="" />
                    <h3>Standard Plan</h3>
                    <div>
                    <ul className='text-left mb-[60px] lg:mb-[130px'>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Unlimited Bandwitch</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Encrypted Connection</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />No Traffic Logs</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Works on All Devices</li>
                    </ul>

                    </div>
                    <h2 className='font-Rubik font-medium text-[25px] text-[#0B132A] mb-[25px]'>$9 <span className='text-[#4F5665] font-normal'>/mo</span>  </h2>
                    <Link to=''>Select</Link>

                    
                    


                </div>
                <div className="plan_single_card">
                    
                    <img className='inline-block' src="images/PremiumPlan_img.png" alt="Premium" />
                    <h3>Premium Plan</h3>
                    <div>
                    <ul className='text-left mb-[60px] lg:mb-[130px'>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Unlimited Bandwitch</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Encrypted Connection</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />No Traffic Logs</li>
                        <li><img className='pr-[15px] inline-block' src="images/Plan_Tik_img.png" alt="Tik" />Works on All Devices</li>
                    </ul>

                    </div>
                    <h2 className='font-Rubik font-medium text-[25px] text-[#0B132A] mb-[25px]'>$12 <span className='text-[#4F5665] font-normal'>/mo</span>  </h2>
                    <Link to=''>Select</Link>

                    
                    


                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Plan