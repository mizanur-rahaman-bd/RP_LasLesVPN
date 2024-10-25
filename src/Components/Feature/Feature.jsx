import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <>
    <section className='feature'>
        <div className="container">
            <div className="feature_row">
                <div className="feature_img_col">
                    <img src="images/feature_img.png" alt="feature_image" />

                </div>
                <div className="feature_text_col w-[427px]">
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>


                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Feature