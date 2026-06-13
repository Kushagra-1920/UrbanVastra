import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Label } from "@headlessui/react";
import OrderCard from "../components/CheckoutPageComponents/OrderCard.jsx";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMore from '@mui/icons-material/ExpandMore'

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Return", value: "returned" },
]
const OrderPage = () => {
    return (
        <div className="px-5 lg:px-20 container ">
            <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
                {/* filter */}
                <Grid size={{ xs: 12, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>

                    <div className="h-auto w-full   md:sticky md:top-5 p-5 mb-5 ">
                        <h1 className="font-bold text-lg">Filter</h1>
                        <div className="space-y-3 mt-5">
                            
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="filter-content"
                                    id="filter-header"
                                >
                                    <Typography>Order Status</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    {orderStatus.map((option) => (
                                        <div key={option.value} className="flex items-center mb-2">
                                            <input
                                                value={option.value}
                                                type="checkbox"
                                                id={option.value}
                                                className="h-4 w-4 border-gray-300"
                                            />

                                            <label
                                                htmlFor={option.value}
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </Grid>
                
                <Grid size={{ xs: 12, md: 9 }}>
                    {[1, 1, 1, 1].map((item, index) => (
                        <OrderCard key={index} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderPage;
