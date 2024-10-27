import React from 'react'
import './CustomerSlide.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { IoIosStar } from "react-icons/io";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const CustomerSlide = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: (<div>
          <div className="left_arrow">
          <FaRegArrowAltCircleLeft />
          </div>
          </div>),
        nextArrow: (<div>
          <div className="right_arrow">
          <FaRegArrowAltCircleRight />
          </div>
          </div>),
          responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };



  return (
    <>
      
      <Slider {...settings}>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_one.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Viezh Robert</h4>
              <h5 className=''>Warsaw Poland</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
        </div>
        
      </div>
      <div>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_two.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Yessica Christy</h4>
              <h5 className=''>Shanxi, China</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
        </div>
        
      </div>
      </div>
      <div>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_three.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Kim Young Jou</h4>
              <h5 className=''>Seoul, South Korea</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
        </div>
        
      </div>
        
      </div>
      <div>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_four.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Chidinma</h4>
              <h5 className=''>Cape Town South Africa</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum, placeat aliquid cumque assumenda ab in obcaecati quis omnis ipsa.</p>
        </div>
        
      </div>
      </div>
      <div>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_five.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Laura Bin</h4>
              <h5 className=''>Copenhagen Denmark</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur facilis sapiente?</p>
        </div>
        
      </div>
      </div>
      <div>
      <div className='person_one'>
        <div className="person_heading_Row">
            <div className="img_Name_col flex flex-wrap">
              <div className="img">
              <img className='pr-[20px] inline-block' src="images/slide_img_six.png" alt="man" />

              </div>
              <div className="name">
              <h4 className='inline-block'>Faysal Akram</h4>
              <h5 className=''>Riad Saudi Arabia</h5>

              </div>
            
            

            </div>
            <div className="review_col">
                <p>4.5</p>
                <IoIosStar className='w-[16px] h-[16px] text-[#FEA250]' />


            </div>
            

        </div>
        <div className="person_text_row">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim molestias suscipit harum expedita aspernatur veniam?</p>
        </div>
        
      </div>
      </div>
        




      </Slider>

      
    
    </>
  )
}

export default CustomerSlide