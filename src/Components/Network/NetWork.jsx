import React from 'react'
import './NetWork.css'

const NetWork = () => {
  return (
    <>
    <section network>
        <div className="container">
            <div className="network_row p-4 lg:p-0">
                <div className="network_text_row">
                <h2 className='w-[280px] lg:w-[383px] mx-auto text-center'>Huge Global Network of Fast VPN</h2>
                <p className='w-[290px] lg:w-[555px] mx-auto text-center'>See <span className='font-medium'>LaslesVPN</span>  everywhere to make it easier for you when you move locations.</p>

                </div>
                <div className="Network_img_Row text-center mb-[35px]">
                    <img className='text-center inline-block' src="images/HugeGlobal.png" alt="Network" />
                </div>
                <div className="platform">
                    <img src="images/netflex.png" alt="netflex" />
                    <img src="images/reddit.png" alt="" />
                    <img className='mt-[-30px] lg:mt-0 mb-[-50px] lg:mb-0' src="images/amazon.png" alt="" />
                    <img className='mb-[30px] lg:mb-0' src="images/discord.png" alt="" />
                    <img src="images/spotify.png" alt="" />
                    

                    
                </div>
                
            </div>
        </div>

    </section>
    
    </>
  )
}

export default NetWork