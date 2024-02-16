import React, { useState, useEffect } from 'react';
import { FaGripLines, FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarBottom = () => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value);
  };

  return (
    <div className='w-full bg-[#F5F5F3] relative'>
      <div className='max-w-container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row justify-between w-full px-10 pb-4 lg:pb-0 h-full lg:h-24 relative'>
          <div className='flex h-14 cursor-pointer items-center gap-2 text-black' onClick={toggleDropdown}>
            <FaGripLines size='1.5rem'/>
            <button className='text-[14px] font-normal'>Shop by Category</button>
            {showDropdown && (
            <ul className="absolute top-12 z-50 w-auto text-white p-4 pb-6 rounded-md border border-gray-300 mt-2 bg-black">
              {categories.map((category) => (
                <li
                  key={category}
                  className='text-white px-4 py-2 hover:bg-red-500 duration-300 cursor-pointer text-sm'>
                  {category}
                </li>
              ))}
            </ul>
          )}
          </div>

          <div className='relative w-full lg:w-[600px] h-[50px] text-base text-black bg-white flex items-center gap-2 justify-between px-6 rounded-xl'>
            <input type='text' placeholder='Search your products here' className='flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]' value={searchValue} onChange={handleSearchChange}/>
            <span className='flex justify-center items-center bg-white'>
              <FaSearch />
            </span>
          </div>

          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div className="flex"  onClick={toggleUserDropdown}><FaUser /><IoMdArrowDropdown /></div>
            {showUserDropdown && (
              <ul className='absolute top-6 right-0 z-50 w-auto text-white p-4 pb-6 rounded-md border border-gray-300 mt-2 bg-black'>
                <li className='text-white px-4 py-2 hover:bg-red-500 duration-300 cursor-pointer text-sm'>Login</li>
                <li className='text-white px-4 py-2 hover:bg-red-500 duration-300 cursor-pointer text-sm'>Signup</li>
              </ul>
            )}
            <a href="/cart">
              <div className="relative">
                <FaCartShopping size='1rem'/>
                <span className="absolute top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-black text-white">0</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavbarBottom;
