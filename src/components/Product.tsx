import React from "react";
import { ADD_TO_BASKET } from "../store/actions";
import { useAppDispatch } from "../store/store";

export interface IProps {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
}

const Product: React.FC<IProps> = (item) => {
  const { title, price, rating, image } = item;
  const dispatch = useAppDispatch();
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
      <button onClick={() => dispatch({ type: ADD_TO_BASKET, payload: item })}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
