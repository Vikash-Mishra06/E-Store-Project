import React, { useState, useEffect } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Modal from './Modal'
import Login from '../components/Login'
import Register from '../components/Register'

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const navigate = useNavigate()
    const [isModelOpen, setisModelOpen] = useState(false)
    const [isLogin, setisLogin] = useState(true)

    // ✅ track logged in user
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const updateUser = () => {
            const storedUser = JSON.parse(localStorage.getItem("currentUser"))
            setCurrentUser(storedUser)
        }

        updateUser() // run once when mounted

        // 🔥 Listen for login/logout events
        window.addEventListener("authChange", updateUser)

        return () => {
            window.removeEventListener("authChange", updateUser)
        }
    }, [])



    const HandleLogout = () => {
        localStorage.removeItem("currentUser")
        toast.error("Logout Successful")
        setCurrentUser(null)
        navigate('/login')
    }

    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto py-4 px-4 md:px-16 lg:px-24 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to={'/'}>e-Store</Link>
                </div>

                <div className='relative flex-1 mx-4'>
                    <form>
                        <input className='w-full border py-2 px-6 rounded' type="text" placeholder='Search' />
                        <FaSearch className='absolute top-3 right-6 text-red-500 text-lg'></FaSearch>
                    </form>
                </div>

                <div className=' flex items-center mr-4 text-xl'>
                    <NavLink to={"/cart"} className="relative"><FaShoppingCart />
                        {products.length > 0 && (
                            <span className='absolute -top-3 -right-2 text-xs font-semibold w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </NavLink>
                </div>

                <div className='flex cursor-pointer'>
                    {currentUser ? (
                        <button onClick={HandleLogout} className='px-4 py-1 text-center rounded-lg bg-red-500 text-white text-lg'>
                            Logout
                        </button>
                    ) : (
                        <>
                            <span onClick={() => navigate('/login')} className='hidden md:block text-lg'>Login |</span>
                            <span onClick={() => navigate('/register')} className='hidden md:block text-lg ml-1'> Register</span>
                        </>
                    )}
                </div>

                <button className='block md:hidden text-lg'><FaUser /></button>
                <button className='ml-4 lg:hidden md:hidden text-2xl'><i className="ri-menu-line"></i></button>
            </div>

            <div className='hidden md:flex items-center justify-center gap-10 text-lg font-medium pb-2'>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Home</NavLink>
                <NavLink to={"/shop"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Shop</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>Contact</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-red-500 underline" : "hover:text-red-500 hover:underline"}>About</NavLink>
            </div>

            <Modal isModelOpen={isModelOpen} setisModelOpen={setisModelOpen}>
                {isLogin ? <Login /> : <Register />}
            </Modal>
        </nav>
    )
}

export default Navbar
