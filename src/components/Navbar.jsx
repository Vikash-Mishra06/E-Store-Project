import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto py-4 px-4 md:px-16 lg:px-24 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link >e-Store</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input className='w-full border py-2 px-6 rounded' type="text" placeholder='Search' />
                        <FaSearch className='absolute top-3 right-6 text-red-500 text-lg'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center mr-4 text-xl'>
                <NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}><FaShoppingCart /></NavLink>

                </div>
                <button className='hidden md:block text-lg'>Login | Register</button>
                <button className='block md:hidden text-lg'><FaUser /></button>
                <button className='ml-4 lg:hidden md:hidden text-2xl'><i className="ri-menu-line"></i></button>
            </div>

            <div className='hidden md:flex items-center justify-center gap-10 text-lg font-medium pb-2  '>
                <NavLink to={"/home"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Home</NavLink>
                <NavLink to={"/shop"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Shop</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Contact</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar