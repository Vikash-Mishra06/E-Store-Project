import React from 'react'
import { Categories } from '../assets/mockData'
import img1 from './../assets/images/hero_image.JPG'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'



const Home = () => {
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
        <div className='w-full md:w-7/12 mt-8 md:mt-0 h-96'>
          <img className='w-full h-full object-fit rounded' src={img1} alt="" />
        </div>
      </div>
    </div>
    <InfoSection />
    <CategorySection />
</>
  )
}

export default Home