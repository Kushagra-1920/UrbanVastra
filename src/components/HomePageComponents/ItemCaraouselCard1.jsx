import React from 'react'


const HomeSectionCard = ({ item }) => {
  return (

    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      
      <div className='h-[15rem] w-full overflow-hidden'>
        <img
          className='w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105'
          src={item.imageUrl}
          alt=""
        />
      </div>

      <div className='p-2'>
        <h3 className='text-lg font-bold text-black'>
          {item.title} 
        </h3>

        <p className='mt-2 text-sm text-gray-900'>
          {item.brand}
        </p>
          
        <p className='text-xl font-bold text-black  mt-4'>
          
          ₹{item.price}  
        </p>
      </div>

    </div>
  )
}

export default HomeSectionCard