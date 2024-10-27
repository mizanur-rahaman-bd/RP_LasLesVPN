import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <>
    <section className='feature px-4'>
        <div className="container">
            <div className="feature_row">
                <div className="feature_img_col mb-[15px] lg:mb-0">
                    <img src="images/feature_img.png" alt="feature_image" />

                </div>
                <div className="feature_text_col w-[427px]">
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul>
                        <li><img className='pr-[10px] inline-block' src="images/feature_tik.png" alt="tik" />Powerfull online protection.</li>
                        <li><img className='pr-[10px] inline-block' src="images/feature_tik.png" alt="tik" />Internet without borders.</li>
                        <li><img className='pr-[10px] inline-block' src="images/feature_tik.png" alt="tik" />Supercharged VPN</li>
                        <li><img className='pr-[10px] inline-block' src="images/feature_tik.png" alt="tik" />No specific time limits.</li>
                    </ul>


                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Feature