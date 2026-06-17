import React from 'react'
import CartItem from '../components/Cart/CartItem'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const navigate= useNavigate();

  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }

  return (

    <div  className='lg:grid lg:grid-cols-4 gap-10 relative '>

          <div className='lg:col-span-3 ml-5'>
          
            {[1,1,1,1].map((item)=> <CartItem/>)}

          </div>

          <div className=' col-span-1 mr-5 ' >
          
           <div className='pt-5 sticky lg:top-5 px-5 h-100  border border-gray-200 shadow-lg  rounded-md'>
            <p className='uppercase font-semibold opacity-80 text-gray-700 pb-4'>Price Details</p>
              <hr className='opacity-20' />
              <div className='space-y-3 font-semibold justify-between'>
              
              
              <div className="flex justify-between pt-3  text-black">
                <span>Price</span>
                <span>₹4697 </span>
              </div>

              <div className="flex justify-between pt-3  text-black">
                <span>Discount</span>
                <span className='text-green-600'>-₹3413 </span>
              </div>

              <div className="flex justify-between pt-3  text-black">
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free </span>
              </div>
                <hr className='opacity-20' />
              <div className="flex justify-between pt-3 text-xl text-black">
                <span>Total Amount</span>
                <span >₹1278 </span>
              </div>
            <br />
          </div>
              

           <div className=' items-center'>
            <Button 
            onClick={handleCheckout}
            variant="contained" color="secondary" className='w-full'>
              Checkout
            </Button> 
           </div> 
          
           </div>  
          </div>
      
    </div>
  )
}

export default CartPage
