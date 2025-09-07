import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useSelector } from "react-redux"

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="border border-gray-300 p-4 rounded-lg mb-4 bg-white shadow-sm">
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
            >
                <h3 className="text-lg font-semibold">{title}</h3>
                {open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`mt-4 space-y-4 transition-all ${open ? "block" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}

const Checkout = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="container mx-auto py-5 min-h-96 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl font-semibold text-red-500 mb-6 text-center md:text-left">
                Checkout
            </h1>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
                {/* Left: Forms */}
                <div className="md:w-2/3">
                    {/* Billing Info */}
                    <Accordion title="Billing Information">
                        <div>
                            <label className="block text-gray-700 mb-1">Name:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter Phone"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                    </Accordion>

                    {/* Shipping Info */}
                    <Accordion title="Shipping Information">
                        <div>
                            <label className="block text-gray-700 mb-1">Address:</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter Address"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">City:</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter City"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Postal Code:</label>
                            <input
                                type="text"
                                name="postal"
                                placeholder="Enter Postal Code"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                    </Accordion>

                    {/* Payment Info */}
                    <Accordion title="Payment Method">
                        <div>
                            <label className="block text-gray-700 mb-1">Card Number:</label>
                            <input
                                type="text"
                                name="card"
                                placeholder="1234 5678 9012 3456"
                                className="w-full border border-gray-300 p-2 rounded outline-none"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-gray-700 mb-1">Expiry Date:</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    className="w-full border border-gray-300 p-2 rounded outline-none"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700 mb-1">CVV:</label>
                                <input
                                    type="password"
                                    name="cvv"
                                    placeholder="***"
                                    className="w-full border border-gray-300 p-2 rounded outline-none"
                                />
                            </div>
                        </div>
                    </Accordion>
                </div>

                {/* Right: Order Summary */}
                <div className="md:w-1/3 bg-white rounded-2xl shadow p-5 h-fit border">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3">
                        {cart.products.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between border-b pb-2"
                            >
                                <img src={product.image} alt="" className="w-12 h-12 object-contain" />
                                <div className="flex-1 px-3">
                                    <h4 className="text-sm font-medium">{product.title}</h4>
                                    <p className="text-xs text-gray-500">
                                        ${product.price} × {product.quantity}
                                    </p>
                                </div>
                                <p className="font-semibold">
                                    ${(product.price * product.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between text-lg font-semibold border-t pt-3 mt-4">
                        <span>Total:</span>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="w-full mt-5 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout