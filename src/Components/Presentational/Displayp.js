import React from "react";

export default function Displayp(props) {
  const productList =
    props.products &&
    props.products.map(product => {
      return (
        <div key={product.id}>
          <span>{product.name}</span>
          <img src={product.image} alt="" />
          <span>{product.price}</span>
        </div>
      );
    });
  return <div>{productList}</div>;
}
