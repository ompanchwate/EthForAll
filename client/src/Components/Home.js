import React from 'react'
import nft from "../Images/nft.jpg";

export const Home = () => {
    return (
        <div className=' bg-gradient-to-tr from-[#180a55] via-[#231262] to-[#180a55]'>
            <div className='flex justify-center items-center mx-40 space-x-28 h-screen overflow-y-hidden'>
                <p className='text-justify text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor, quae molestiae possimus sit repellendus molestias reprehenderit veniam exercitationem obcaecati numquam quibusdam? Quisquam molestiae distinctio totam possimus! Distinctio, sed reiciendis!</p>
                <img src={nft} alt="" className='h-80 rounded-xl shadow-xl shadow-black' />
            </div>
        </div>
    )
}

// bg-gradient-to-t from-purple-900 to-violet-900