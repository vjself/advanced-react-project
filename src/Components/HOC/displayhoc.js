import React from "react";
import hoc from "./hoc";

function displayhoc(props) {
  const productList = props.data.map(product => {
    return (
      <div key={product.id}>
        {product.name}
        <img src={product.image} alt="" />
        <span>{product.price}</span>
      </div>
    );
  });
  return <div>{productList}</div>;
}

export default hoc(displayhoc, "/api/products");
