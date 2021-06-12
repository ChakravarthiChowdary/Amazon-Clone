import React from "react";
import { REMOVE_FROM_BASKET } from "../store/actions";
import { useAppDispatch } from "../store/store";

interface IProps {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
}

const CartItem: React.FC<IProps> = (item) => {
  const { title, price, rating, image, id } = item;
  const dispatch = useAppDispatch();
  return (
    <div className="cartItem">
      <img src={image} alt={title} className="cartItem__image" />

      <div className="cartItem__info">
        <div>
          <h2>{title}</h2>
          <p>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="cartItem__stars">
            {Array(rating)
              .fill("")
              .map((_, i) => (
                <p>&#11088;</p>
              ))}
          </div>
        </div>
        <button
          onClick={() => dispatch({ type: REMOVE_FROM_BASKET, payload: id })}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CartItem;
