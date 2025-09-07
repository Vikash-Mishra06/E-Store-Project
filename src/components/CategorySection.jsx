import React from 'react'
import Mens from '../assets/images/image.png'
import Womens from '../assets/images/image copy.png'
import Kids from '../assets/images/image copy 2.png'
import { useNavigate } from 'react-router-dom'


const CategorySection = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/shop')} className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 grid:col-1 md:grid:col-3'>
        <div >
            <img className='rounded-xl transform transition-transform duration-300 hover:scale-103 cursor-pointer' src={Mens} alt="" />
        </div><div>
            <img className='rounded-xl transform transition-transform duration-300 hover:scale-103 cursor-pointer' src={Womens} alt="" />
        </div>
        <div>
            <img className='rounded-xl transform transition-transform duration-300 hover:scale-103 cursor-pointer' src={Kids} alt="" />
        </div>
    </div>
  )
}

export default CategorySection