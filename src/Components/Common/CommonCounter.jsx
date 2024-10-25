import React from 'react'
import CountUp from 'react-countup';

const CommonCounter = ({countIcon, countNumber, countText, countPlus}) => {
  return (
    <>
       <div className="counter_row text-center">
        <div className="single_counter flex flex-wrap gap-[36px]">
            <div className="Single_counter_icon_col">
                <div className='w-[55px] h-[55] rounded-[100px] bg-[#FFECEC] p-[15px]'>
                {countIcon}

                </div>
            </div>
            <div className="count_info_col">
                <div className="count_number_with_plus flex flex-wrap">
                <CountUp className='font-Rubik font-bold text-[25px] text-[#0B132A]' end={countNumber} duration={10} />
                <p className='font-Rubik font-bold text-[25px] text-[#0B132A]'>{countPlus}</p>

                </div>
                <div className="single_count_text">
                    <p className='font-Rubik font-normal text-[20px] text-[#4F5665]'>{countText}</p>

                </div>
                

            </div>
        </div>
       </div>
    
    </>
  )
}

export default CommonCounter