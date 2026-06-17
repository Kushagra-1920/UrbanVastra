import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddress from "../components/CheckoutPageComponents/DeliveryAddress";
import OrderSummary from "../components/CheckoutPageComponents/OrderSummary";


const steps = [
    "Login",
    "Delivery Address",
    "Order Summary",
    "Payment",
];

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();

    const querySearch = new URLSearchParams(location.search);

    const step = Number(querySearch.get("step") || 1);
    const activeStep = step - 1;

    const handleNext = () => {
        navigate(`/checkout?step=${step + 1}`);
    };

    const handleBack = () => {
        navigate(`/checkout?step=${step - 1}`);
    };

    return (
        <div className="px-10 lg:px-20">
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activeStep >= steps.length ? (
                    <Typography sx={{ mt: 2 }}>
                        All steps completed - you're finished
                    </Typography>
                ) : (
                    < div >


                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                            >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                                >
                                Back
                            </Button>

                            <Box sx={{ flex: "1 1 auto" }} />

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </Box>
                                    {/* Render components based on step */}
                                    {activeStep === 0 && <div>Login component </div>}
            
                                    {activeStep === 1 && <div className="p-2"> <DeliveryAddress/> </div>}
            
                                    {activeStep === 2 && <div> <OrderSummary/></div>}
            
                                    {activeStep === 3 && <div>Payment Component</div>}
                    </div>
                )}
            </Box>
        </div>
    );
}