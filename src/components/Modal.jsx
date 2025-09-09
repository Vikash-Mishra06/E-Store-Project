import React from 'react'

const Modal = ({isModelOpen, setisModelOpen, children}) => {
    if(!isModelOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 items-center justify-center z50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-x-md'>
            <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={() => setisModelOpen(false)}>
                &times;
            </button>
        </div>
    </div>
  )
}

export default Modal