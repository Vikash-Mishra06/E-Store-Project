import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart)

  const totalAmount = cart.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (
    <div className="container mx-auto py-5 min-h-96 px-4 md:px-8 lg:px-16">
      {cart.products.length > 0 ? (
        <div>
          <h1 className="text-3xl font-semibold text-red-500 mb-6 text-center md:text-left">
            Shopping Cart
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            {/* Cart Products */}
            <div className="md:w-2/3 bg-white rounded-2xl shadow p-4 overflow-x-auto border">
              <div className="hidden md:flex justify-between border-b items-center mb-4 text-sm font-bold text-gray-600">
                <p className="w-1/3">Products</p>
                <div className="flex space-x-8 md:space-x-6 pb-2">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 ">
                {cart.products.map(product => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b last:border-0"
                  >
                    {/* Product Info */}
                    <div className="flex items-center space-x-4 flex-1 w-full rounded-2xl">
                      <img
                        className="w-16 h-16 object-contain rounded"
                        src={product.image}
                        alt={product.title}
                      />
                      <h2 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                        {product.title}
                      </h2>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap md:flex-nowrap md:space-x-0 items-center justify-between w-full md:w-auto text-sm md:text-base">
                      <p className="w-20 text-center ">${product.price}</p>

                      <div className="flex items-center border rounded mx-2">
                        <button className="text-lg font-bold px-2 border-r hover:bg-gray-100">
                          -
                        </button>
                        <p className="text-lg px-3">{product.quantity}</p>
                        <button className="text-lg px-2 border-l hover:bg-gray-100">
                          +
                        </button>
                      </div>

                      <p className="w-20 text-center">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>

                      <button className="text-red-500 hover:text-red-600 hover:scale-110 transition-transform mx-auto md:mx-0">
                        <i className="ri-delete-bin-line text-2xl"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="md:w-1/3 bg-white rounded-2xl shadow p-5 h-fit">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-medium">{cart.totalQuantity}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t pt-3 mt-3">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button className="w-full mt-5 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl md:text-4xl text-center text-gray-500 font-medium">
          No Products Found
        </h1>
      )}
    </div>
  )
}

export default Cart
