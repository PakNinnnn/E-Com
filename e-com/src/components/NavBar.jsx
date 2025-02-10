import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom' 
import { LuSearch } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <img src={assets.white_logo_word} alt="logo" className='w-36' />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-black' >
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>  
        <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-black' >
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-black' >
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-black' >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex gap-6 items-center'> 
        <LuSearch className='w-7 cursor-pointer' /> 
        <div className='group relative'>
          <IoPersonOutline className='w-7 cursor-pointer' />
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>My Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
