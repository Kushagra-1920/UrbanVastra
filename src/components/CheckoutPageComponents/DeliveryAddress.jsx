import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'
import { Textarea } from '@headlessui/react'
import AddressCard from './AddressCard.jsx'

const DeliveryAddress = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
      
        const data = new FormData(e.currentTarget);
        
        const address ={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("streetAddress"),
            city:data.get("city"),
            zip:data.get("zip"),
            state:data.get("state"),
            phoneNumber:data.get("phoneNumber")

        }
        
        console.log("address",address);

    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid  size={{ xs: 12, lg: 5 }} className="border  border-gray-300 rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className='p-5 py-7 border-b  border-gray-300  cursor-pointer'>

                            <AddressCard/>

                        <Button variant="contained" color="primary" size='large'
                            sx={{
                                bgcolor: "success.main",
                                "&:hover": {
                                    bgcolor: "success.dark",
                                },
                                mt: 1
                            }}

                        >
                            deliver here
                        </Button>
                    </div>
                </Grid>

                <Grid  size={{ xs: 12, lg: 7 }}>
                    <Box className="border border-gray-300 rounded-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="firstName"
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="lastName"
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='family-name      '

                                    />
                                </Grid>

                                <Grid size={{ xs: 12 }} >

                                    <TextField
                                        required
                                        id='streetAddress'
                                        name='streetAddress'
                                        label="Street Address"
                                        multiline
                                        rows={4}
                                        fullWidth

                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="city"
                                        name='city'
                                        label="city"
                                        fullWidth
                                        autoComplete='address-level2'

                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="state"
                                        name='state'
                                        label="state/province/region"
                                        fullWidth
                                        autoComplete='address-level1'

                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="zip"
                                        name='zip'
                                        label="zip/postal code"
                                        fullWidth
                                        autoComplete='postal-code'

                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} >

                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name='phoneNumber'
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='tel'

                                    />
                                </Grid>

                            </Grid>
                            <Grid size={{xs:12, sm:6}}>
                                <Button variant="contained" color="primary" size='large' type='submit'
                                    sx={{
                                        bgcolor: "success.main",
                                        "&:hover": {
                                        bgcolor: "success.dark",
                                        },
                                        mt:4
                                    }}

                                >
                                    deliver here
                                </Button>
                            </Grid>

                        </form>
                    </Box>
                </Grid>
            </Grid>


        </div>
    )
}

export default DeliveryAddress
