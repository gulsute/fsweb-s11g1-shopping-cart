import React from "react";
import { ScProduct } from "./scParts";
import { ProductContext } from "./../contexts/ProductContext";
import { CartContext } from "./../contexts/CartContext";
import { useContext } from "react";

const Product = (props) => {
  const { products, addItem } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => addItem(props.product)}>Add to cart</button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
