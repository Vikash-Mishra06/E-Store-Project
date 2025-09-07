import React from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success("Added to Cart")
  } 
  return (
    <div className='relative p-4 border rounded-xl shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-100'>
        <img loading='lazy' className='w-full h-48 object-contain mb-4' src={product.image} alt="" />
        <h2 className='text-xl font-semibold '>{product.title.slice(0, 20)}..</h2>
        <h3 className='text-lg'>{product.category}</h3>
        <p className='text-green-500 text-xl font-semibold'>Price: ${product.price}</p>
        <div className='absolute bottom-4 right-2 flex items-center justify-center text-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-25 hover:bg-red-600 transition-all'
        onClick={(e) => handleAddToCart(e, product)}
        >
            <span className='group-hover:hidden text-center pb-1 text-xl font-semibold'>+</span>
            <span className='hidden group-hover:block text-center font-semibold pb-1'>Add to Cart</span>
        </div>
    </div>
  )
}

export default ProductCard