import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const FilteredData = () => {
  const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-bold mb-6 text-center'></h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 cursor-pointer'>
        {filterProducts.map((product, index) =>  (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FilteredData