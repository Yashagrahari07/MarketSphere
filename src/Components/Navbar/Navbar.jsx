import React from 'react'
import { useState, useEffect } from "react"
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavbarBottom from "./NavbarBottom"
import { Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const [dropdown,setDropdown]=useState(false);
  const location=useLocation();

  const toogleDropdown = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setMenu('home');
    } else if (location.pathname === '/shop') {
      setMenu('shop');
    } else if (location.pathname === '/about') {
      setMenu('about');
    } else if (location.pathname === '/contact') {
      setMenu('contact');
    }
  }, [location]);

  return (
    <>
      <div className='sticky top-0 z-30 flex justify-between h-13 py-1 px-10 shadow-md bg-white lg:h-20'>
        <div className='flex items-center'>     
          <Link to='/'><img src={logo} alt="MarketSphere" /></Link>
        </div>

        <ul className='hidden md:flex items-center list-none gap-12 text-[#626262] text-lg px-2'>
          <li onClick={()=>{setMenu("home")}} className='flex flex-col items-center cursor-pointer'><Link to='/'> Home </Link>    {menu=="home"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
          <li onClick={()=>{setMenu("shop")}} className='flex flex-col items-center cursor-pointer'><Link to='/shop'> Shop </Link>     {menu=="shop"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
          <li onClick={()=>{setMenu("about")}} className='flex flex-col items-center cursor-pointer'><Link to='/about'> About </Link>  {menu=="about"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>} </li>
          <li onClick={()=>{setMenu("contact")}} className='flex flex-col items-center cursor-pointer'><Link to='/contact'> Contact </Link>     {menu=="contact"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
        </ul>
          <div className="flex flex-col items-center justify-center md:hidden">
            <button onClick={toogleDropdown} className="focus:outline-none"><GiHamburgerMenu size='2rem'/></button>
          </div>

        {dropdown && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 z-10">
            <div className="flex justify-end p-4">
              <button onClick={toogleDropdown} className="text-white focus:outline-none"><IoClose size='3rem'/></button>
            </div>
            <ul className='flex flex-col items-center list-none gap-12 text-white text-lg'>
              <li onClick={()=>{setMenu("home")}} className='block items-center cursor-pointer'><Link to='/'> Home </Link>    {menu=="home"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
              <li onClick={()=>{setMenu("shop")}} className='block items-center cursor-pointer'><Link to='/shop'> Shop </Link>      {menu=="shop"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
              <li onClick={()=>{setMenu("about")}} className='block items-center cursor-pointer'><Link to='/about'> About </Link>  {menu=="about"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>} </li>
              <li onClick={()=>{setMenu("contact")}} className='block items-center cursor-pointer'><Link to='/contact'> Contact </Link>     {menu=="contact"?<hr className='border-0 w-4/5 h-1 rounded-sm bg-red-500'/>:<></>}   </li>
            </ul>
          </div>
        )}
      </div>

      <NavbarBottom/>
    </>
  )
};

export default Navbar
