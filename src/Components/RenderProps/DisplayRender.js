import React from "react";

export default function DisplayRender(props) {
  const productList =
    props.data &&
    props.data.map(product => {
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
