import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mockData } from '../assets/mockData'

const Shop = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product) // destructure products directly

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [dispatch])

  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="hidden md:flex justify-center gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container mx-auto py-10 px-10">
        <h1 className="text-4xl text-center font-bold mb-6 text-red-500">
          Shop by Categories
        </h1>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop
