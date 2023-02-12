import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center h-32 bg-gradient-to-b from-[#180a55] via-[#231262] to-[#180a55]  shadow-t- '>
            <div className='text-white text-lg tracking-wider'>Created for <b>EthForAll</b> by <b>Team Hackios</b></div>
            <div className=' mt-5 text-white text-lg'>
                Visit on 
                <a href="" className=' font-bold text-red-500'> Github</a>
            </div>
        </div>
    )
}
