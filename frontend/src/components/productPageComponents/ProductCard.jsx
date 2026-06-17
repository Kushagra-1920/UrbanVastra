import { useNavigate } from "react-router-dom";
import "./productPagecss/ProductPage.css";
import Button from '@mui/material/Button'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/product/${5}`)}
     className="productCard w-full  m-3 transition-all cursor-pointer  ">
      <div className="h-60 ">
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt=""
        />
      </div>

      <div className="productCardText bg-white p-3 flex flex-col flex-grow">
        <p className="font-bold text-lg opacity-60 min-h-[90px]">
          {product.title}
        </p>

        <p>{product.brand}</p>

        <div className="mt-auto flex items-center space-x-2">
          <p className="font-bold text-xl">{product.selling_price}</p>
          <p className="text-sm line-through opacity-75">{product.price}</p>
          <p className="text-sm font-bold opacity-75 text-green-500">
            {product.disscount}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
