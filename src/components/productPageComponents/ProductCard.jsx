import "./productPagecss/ProductPage.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-60 m-3 transition-all cursor-pointer ">
      <div className="h-80 ">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt=""
        />
      </div>

      <div className="productCardText bg-white p-3">
        <p className="font-bold text-lg opacity-60"> {product.title} </p>
        <p> {product.brand} </p>

        <div className="flex items-center space-x-2">
          <p className="font-bold text-xl"> {product.selling_price} </p>
          <p className="text-sm  line-through opacity-75"> {product.price} </p>
          <p className="text-sm  font-bold opacity-75 text-green-500">
            {" "}
            {product.disscount}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
