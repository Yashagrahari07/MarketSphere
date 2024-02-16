import React from 'react'
import { useState } from "react"
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const [dropdown,setDropdown]=useState(false);

  const toogleDropdown = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };

  return (
    <>
      <div className='flex justify-between h-20 py-2 px-10 shadow-md'>
        <div className='flex items-center'>     
          <img src={logo} alt="MarketSphere" />
        </div>

        <ul className='hidden md:flex items-center list-none gap-12 text-[#626262] text-lg px-2'>
          <li onClick={()=>{setMenu("home")}} className='flex flex-col items-center cursor-pointer'>Home    {menu=="home"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
          <li onClick={()=>{setMenu("shop")}} className='flex flex-col items-center cursor-pointer'>Shop     {menu=="shop"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
          <li onClick={()=>{setMenu("about")}} className='flex flex-col items-center cursor-pointer'>About {menu=="about"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>} </li>
          <li onClick={()=>{setMenu("contact")}} className='flex flex-col items-center cursor-pointer'>Contact    {menu=="contact"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
        </ul>
          <div className="flex flex-col items-center justify-center md:hidden">
            <button onClick={toogleDropdown} className="focus:outline-none"><GiHamburgerMenu size='2rem'/></button>
          </div>

        {dropdown && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70">
            <div className="flex justify-end p-4">
              <button onClick={toogleDropdown} className="text-white focus:outline-none"><IoClose size='3rem'/></button>
            </div>
            <ul className='flex flex-col items-center list-none gap-12 text-white text-lg'>
              <li onClick={()=>{setMenu("home")}} className='block items-center cursor-pointer'>Home    {menu=="home"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
              <li onClick={()=>{setMenu("shop")}} className='block items-center cursor-pointer'>Shop     {menu=="shop"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
              <li onClick={()=>{setMenu("about")}} className='block items-center cursor-pointer'>About {menu=="about"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>} </li>
              <li onClick={()=>{setMenu("contact")}} className='block items-center cursor-pointer'>Contact    {menu=="contact"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
            </ul>
          </div>
        )}
      </div>

    </>
  )
};

export default Navbar
