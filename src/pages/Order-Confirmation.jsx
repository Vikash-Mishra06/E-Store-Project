import React from 'react'
import { useLocation } from 'react-router-dom'

const OrderConfirmation = () => {
  const location = useLocation()
  const order = location.state?.order

  if (!order) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg text-gray-600">No order found. Please go back to checkout.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-2xl shadow-lg p-6 md:p-10 border">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-3 text-center text-red-500">
          🎉 Thank you for your order!
        </h2>
        <p className="text-gray-700 font-medium text-center text-base md:text-lg mb-6">
          Your order has been placed successfully. You will receive an email confirmation soon.
        </p>

        {/* Order Info */}
        <div className="border-t pt-4 space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-red-500 mb-2">Order Summary</h4>
            <p className="text-sm text-gray-600 font-medium">Order Number: <span className="font-medium">{order.orderNumber}</span></p>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-50 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Shipping Information:</h2>
            <p className="text-sm font-medium text-gray-600">Address: {order.shippingInformation.address}</p>
            <p className="text-sm font-medium text-gray-600">City: {order.shippingInformation.city}</p>
            <p className="text-sm font-medium text-gray-600">Zip Code: {order.shippingInformation.zip}</p>
          </div>

          {/* Products */}
          <div className="bg-gray-50 rounded-xl">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Items Ordered:</h2>
            <div className="space-y-3">
              {order.products.map((product, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-2 last:border-0">
                  <p className="text-sm md:text-base font-medium text-gray-800">
                    {product.title} <span className="text-gray-800">× {product.quantity}</span>
                  </p>
                  <p className="text-sm md:text-base font-semibold text-gray-900">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg md:text-xl font-bold text-red-500">Total Price:</span>
            <span className="text-lg md:text-xl font-bold text-red-500">${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation