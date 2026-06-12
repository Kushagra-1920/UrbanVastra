import React from 'react'
import AddressCard from './AddressCard.jsx'
import CartPage from '../../pages/CartPage.jsx'

const OrderSummary = () => {
  return (
    <div className='p-5 shadow-lg border border-gray-300 rounded-s-md'>
      <div className='p-5'>
    
      < AddressCard  />
      </div>

      <hr className='opacity-30'/>
      
      <div  className='mt-3'>
        <CartPage/>
      </div>
    </div>
  )
}

export default OrderSummary
