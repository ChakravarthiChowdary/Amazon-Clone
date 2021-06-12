import React from "react";

interface IProps {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
}

const Product: React.FC<IProps> = ({ id, title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill("")
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} className="product__image" />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
