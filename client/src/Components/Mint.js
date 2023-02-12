import React from 'react'

export const Mint = () => {
    return (
        <>
            <div className=' bg-gradient-to-tr from-[#180a55] via-[#231262] to-[#180a55] h-screen flex justify-center items-center '>
                <div className='p-10 bg-slate-900 bg-opacity-90 max-w-lg tracking-wide rounded-3xl '>
                    <form action="" className='flex flex-col justify-center'>
                        <div className='mb-4'>
                            <label className='text-white ml-3'>NFT Name</label>
                            <input type="text" name='nft_name' placeholder='Enter NFT name' className='w-full p-2 rounded-3xl mt-2' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-white ml-3'>NFT Description</label>
                            <input type="text" name='nft_desc' placeholder='Enter NFT description' className='w-full p-2 rounded-3xl mt-2' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-white ml-3'>Price</label>
                            <input type="text" name='nft_price' placeholder='Enter Price' className='w-full p-2 rounded-3xl mt-2' />
                        </div>

                        <div>
                            <h1 className='text-white mb-3'>Choose a File</h1>
                            <a className='bg-gray-400 p-1 px-8 font-semibold tracking-wide border-2 border-slate-400 cursor-pointer rounded-lg'>Select</a>
                        </div>

                        <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

                        <div className='mt-5 flex justify-center'>
                            <button className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg">Mint</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
