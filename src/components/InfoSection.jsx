import React from 'react'

const InfoSection = () => {
    const itemsInfo = [
        {
            icon: <i className="text-3xl text-red-500 ri-truck-line"></i>,
            title: "Free Shipping",
            description: "Free Shipping, on orders over $100.",
        },
        {
            icon: <i className="text-3xl text-red-500 ri-expand-horizontal-line"></i>,
            title: "Returns",
            description: "Return Within 48hrs after cancellation.",
        },
        {
            icon: <i className="text-3xl text-red-500 ri-customer-service-line"></i>,
            title: "Online Support",
            description: "24 hours Online Support, Contact anytime.",
        },
        {
            icon: <i className='text-3xl text-red-500 ri-lock-line' />,
            title: "Payment Secure",
            description: "Your Payment information is secure.",
        },
        {
            icon: <i className="text-3xl text-red-500 ri-discount-percent-line"></i>,
            title: "Discount",
            description: "Enjoy Best prices on our products.",
        }
    ]

    return (
        <div className='pb-8 pt-12 px-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 '>
                {itemsInfo.map((item, index) => (
                    <div className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-100' key={index}>
                        {item.icon}
                        <h3 className='mt-2 text-xl font-semibold'>{item.title}</h3>
                        <p className='mt-2 '>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoSection