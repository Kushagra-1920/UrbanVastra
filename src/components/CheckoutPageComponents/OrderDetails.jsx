import React from 'react'
import AddressCard from './AddressCard.jsx'
import OrderTracker from './OrderTracker.jsx'
import Grid from '@mui/material/Grid'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';
import Box from "@mui/material/Box";

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20 '>

            <div className='shadow-sm rounded-xl border border-gray-100 px-5 '>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-10'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container spacing={2}>
                {[1, 1, 1, 1, 1].map((item, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                        <Grid
                            container
                            className="p-5 shadow-xl rounded-xl border border-gray-200"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Grid size={{ xs: 12, md: 8 }}>
                                <div className="flex items-center cursor-pointer">
                                    <img
                                        className="w-16 h-16 md:w-20 md:h-20 object-cover object-top"
                                        src="https://imgs.search.brave.com/Uu6ggUb9yYmgKJnop5GH2kkaGWsUo9ADwE9GfRbNw68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9ua2Vyc2Nvcm5l/ci5jb20vY2RuL3No/b3AvZmlsZXMvQ2xh/c3NpY0FzaEJsYWNr/UmVsYXhlZEZpdEpl/YW5zXzUuanBnP3Y9/MTc3NzYxODE4MQ"
                                        alt=""
                                    />

                                    <div className="ml-3 md:ml-5 space-y-1">
                                        <p>Men Slim Mid Rise Black Jeans</p>
                                        <p className="opacity-50 text-xs font-semibold">
                                            Size: M
                                        </p>
                                        <p className="opacity-50 text-xs font-semibold">
                                            Color: Black
                                        </p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid
                                size={{ xs: 12, md: 4 }}
                                sx={{
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "flex-end",
                                    },
                                    alignItems: "center",
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                <Box
                                    sx={{
                                        color: deepPurple[500],
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StarIcon sx={{ fontSize: "2rem" }} />
                                    <span>Rate and Review Product</span>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>


        </div>
    )
}

export default OrderDetails