import React from 'react'
import img1 from "../../assets/men-kurta1.jpg"

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      
      
      <div className='h-[13rem] w-[10rem]'>
      <img className='object-cover object-top w-full h-full' src={img1} alt="" />
      </div>

      
      <div className='p-4'>
        <h3 className='text-lg font-bold text-gray-900' >NoFilter</h3>
        <p className='mt-2 text-sm text-gray-600'>Men solid Pure cotton straight kurta</p>
        <p className='text-xl font-bold'>$99.99</p>
      </div>

    </div>
  )
}

export default HomeSectionCard
