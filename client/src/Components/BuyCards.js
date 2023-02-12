import React from 'react'
import product1 from '../Public/product-5.jpg'

export const BuyCards = () => {
    return (
        <>
            <div className=" bg-gradient-to-r from-green-900 via-gray-900 to-red-900">
                <h1 className='text-white text-2xl font-righteous tracking-wider uppercase pt-32 px-32 pb-5'>Available ENS</h1>

                {/* CARDS */}
                <div className='grid grid-cols-4 gap-x-24 px-32 gap-y-14 pb-32'>
                    {/* CARD */}
                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='z-0 hover:scale-110 transition duration-700 ease-in-out' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>

                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='hover:scale-110 transition duration-700 ease-in-out' />
                        </div>

                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>

                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='hover:scale-110 transition duration-700 ease-in-out' />
                        </div>

                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>

                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='hover:scale-110 transition duration-700 ease-in-out' />
                        </div>

                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>

                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='hover:scale-110 transition duration-700 ease-in-out' />
                        </div>

                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>

                    <div className='h-max w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg '>
                        <div className='overflow-hidden rounded-xl cursor-pointer'>
                            <img src={product1} alt="" srcset="" className='hover:scale-110 transition duration-700 ease-in-out' />
                        </div>

                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md'>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
