import React from "react";
import Grid from "@mui/material/Grid";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";


const OrderCard = () => {
   const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`) } 
        className="p-5 shadow-lg hover:shadow-2xl border border-gray-200 rounded-2xl lg:w-auto lg:h-auto">
            <Grid
                container
                spacing={3}
                sx={{
                    display: "flex", justifyContent: "space-between"

                }}
            >
                <Grid size={{  xs: 12, md: 6  }}>
                    <div className="flex cursor-pointer ">
                        <img className="w-16 h-16 md:w-20 md:h-20 object-cover object-top" src="https://imgs.search.brave.com/Uu6ggUb9yYmgKJnop5GH2kkaGWsUo9ADwE9GfRbNw68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9ua2Vyc2Nvcm5l/ci5jb20vY2RuL3No/b3AvZmlsZXMvQ2xh/c3NpY0FzaEJsYWNr/UmVsYXhlZEZpdEpl/YW5zXzUuanBnP3Y9/MTc3NzYxODE4MQ" alt="" />
                        <div className="ml-3 md:ml-5 space-y-1">
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size:M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid size={{ xs: 12, md: 2  }}>
                    <p>₹1099</p>
                </Grid>

                <Grid size={{ xs: 12, md: 4  }}>

                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 mr-2 text-sm" />
                                <span>
                                    Delivered on March 03
                                </span>
                            </p>
                            <p className="text-xs">
                                Your items Has Been Delivered
                            </p>
                        </div>}
                    {false &&
                        <p>
                            <span>
                                Excpected Delivery on Mar 03
                            </span>
                        </p>

                    }



                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
