import React from 'react'
import MenKurtaTemp from '../../assets/men-kurta1.jpg'
import Typography from '@mui/material/Typography'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className='flex items-start bg-gray-100'>

                <div className='w-20 h-20 lg:w-40 lg:h-40 ' >
                    <img
                        className='w-full h-full object-cover object-top'
                        src={MenKurtaTemp} alt="" />
                </div>

                <div className='ml-5 space-y-1'>
                    <Typography variant="h6" color="initial">Men solid Kurta</Typography>
                    <Typography variant="body1" color="initial" className='backdrop-opacity-70'><strong>Size:  </strong> L,White</Typography>
                    <Typography variant="body1" color="initial" className='backdrop-opacity-70'><strong>Seller:</strong> Aj Fabrics </Typography>
                    
                    <div className="mt-5 flex items-center space-x-2 ">
                        <p className="font-bold text-sm">₹699</p>
                        <p className="text-sm line-through opacity-75">₹999</p>
                        <p className="text-sm font-bold opacity-75 text-green-500">30%</p>
                    </div>

                    <div></div>
                </div>


            </div>



        </div>
    )
}

export default CartItem
