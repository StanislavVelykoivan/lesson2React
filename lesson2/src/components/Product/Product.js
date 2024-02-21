import React from 'react';
import './Product.css'
const Product = ({ imageSrc, name, price }) => {
  return (
    <div className="product">
      <img src={imageSrc} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;