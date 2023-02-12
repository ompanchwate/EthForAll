import React from 'react'
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className=' flex items-center justify-between px-5 shadow-black shadow-sm bg-transparent backdrop-blur-md fixed w-screen font-roboto'>
            <div className='flex  justify-center items-center'>
                <Link to='/' className='p-5 font-bold text-white tracking-widest'>ENS MARKETPLACE</Link>
                <ul className='text-white text-lg flex mr-10 tracking-wider cursor-pointer'>
                    <NavLink to='/' className="hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2  p-5 px-15 " >Home</NavLink>
                    <NavLink to='/marketplace' className="hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2  p-5 px-15" >List ENS</NavLink>
                    <NavLink to='/mint' className='hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2 p-5'>Buy ENS</NavLink>
                    <NavLink to='/about' className=' hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2 p-5'>About</NavLink>
                    {/* <Link className=' hover:bg-gray-600 hover:m-2 hover:rounded-lg hover:p-3 p-5'>Profile</Link> */}
                </ul>
            </div>

            <button className='p-2 m-3 px-15 text-white mr-10 tracking-wider border-2 border-slate-600 rounded-full w-40 hover:bg-green-600 hover:scale-105 transition duration-200 cursor-pointer font-roboto hover:font-semibold'>
                Connect
            </button>

        </nav>
    )
}
//bg-gradient-to-r from-[#231262] via-blue-900 to-[#231262]
