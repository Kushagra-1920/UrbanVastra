import React from "react";
import MenKurtaTemp from "../../assets/men-kurta1.jpg";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from '@mui/material/Button'

const CartItem = () => {
  return (
    <div className="p-5 border-2 border-gray-100 shadow-lg  rounded-md ">

      <div className="flex items-start bg-gray-100">
        <div className="w-20 h-20 lg:w-40 lg:h-40 ">
          <img
            className="w-full h-full object-cover object-top"
            src={MenKurtaTemp}
            alt=""
          />
        </div>

        <div className="ml-5 pt-4">
          <Typography variant="h6" color="initial">
            Men solid Kurta
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className="backdrop-opacity-70"
          >
            <strong>Size: </strong> L,White
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className="backdrop-opacity-70"
          >
            <strong>Seller:</strong> Aj Fabrics{" "}
          </Typography>

          <div className="mt-5 flex items-center space-x-2 ">
            <p className="font-bold text-sm">₹699</p>
            <p className="text-sm line-through opacity-75">₹999</p>
            <p className="text-sm font-bold opacity-75 text-green-500">30%</p>
          </div>
        </div>
      </div>

      <div className="mt-3 lg:flex lg:items-center lg:space-x-10  mx-2 ">
        <div className="flex items-center space-x-2  ">
          <IconButton sx={{ color: "red" }}>
            <RemoveCircleIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "Green" }}>
            <AddCircleIcon />
          </IconButton>
        </div>
        <div >
          <Button variant="text" color="primary">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
