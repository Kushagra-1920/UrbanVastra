import React from 'react'
import { Grid, Avatar, Box, Rating } from '@mui/material'

const ProductReview = () => {
  return (
    <div className="flex items-start space-x-4  pb-4"> 
        <Grid container spacing={2} gap={3} >
            <Grid item xs={1} >
                <Box >
                     <Avatar className="text-white" sx={{width: 40, height: 40, bgcolor:"#9155fd"} }>K</Avatar>
                </Box>
        </Grid>
        </Grid>

        <Grid item xs={9}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold">Kush </p>
                    <p className="text-sm text-gray-500" >June 1,2026</p>
                </div>
            </div>

            <div className="space-y-2">
                <Rating value={4.5} name="half-rating " precision={0.5} readOnly >
                </Rating>
                  <p> Nice Product
                </p>
            </div>
        </Grid>
         
        

    </div>
  )
}

export default ProductReview