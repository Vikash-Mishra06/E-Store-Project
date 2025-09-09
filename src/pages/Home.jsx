import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import img1 from './../assets/images/hero_image.JPG'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "./../redux/productSlice"
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.product)
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])
  return (
    <>
      <div className='p-5 md:p-10 lg:p-10 px-4 md:px-16 lg:px-24'>
        <div className='flex items-start justify-between gap-5 mx-auto flex-col md:flex-row space-x-2 '>
          <div className='border-1 p-3 rounded w-full md:w-4/12 md:mt-0'>
            <div className='bg-red-500 text-white text-lg md:text-2xl rounded px-5 py-1 font-medium'>SHOP BY CATEGORIES</div>
            <ul className='bg-yellow-100 text-lg md:text-2xl space-y-4 p-3 '>
              {Categories.map((category, index) => (
                <li key={index}>
                  • {category}
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => navigate('/shop')} className='w-full md:w-7/12 mt-8 md:mt-0 h-96'>
            <img className='w-full h-full object-fit rounded' src={img1} alt="" />
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className='container mx-auto py-12 px-10'>
        <h1 className='text-4xl text-center font-bold mb-6 text-red-500'>Top Products</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, // continue autoplay after user interaction
            pauseOnMouseEnter: true, // pause when mouse hovers over slider
          }}
          modules={[Autoplay]}
          navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
          breakpoints={{
            1399: { slidesPerView: 4 },
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 },
          }}
          className="mt-4 swiper position-relative"
        >
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
            {products.products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className='container mx-auto py-12 px-10'>
        <h1 className='text-4xl text-center font-bold mb-6 text-red-500'>All Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {products.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home