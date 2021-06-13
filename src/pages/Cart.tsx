import React from "react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "../store/store";
import CartItem from "../components/CartItem";

const Cart = () => {
  const basketItems = useAppSelector((state) => state.data.basketItems);
  let total = basketItems.reduce((acc, item) => acc + parseInt(item.price), 0);
  total = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(total);
  const history = useHistory();
  return (
    <div className="cart">
      <div className="cart__banner">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D22170942_IN_OP_School-from-home_Apr21_1500x300_3.jpg"
          alt="amazonad"
          className="cart__image"
        />
        <div className="cart__summary">
          <p>
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details
          </p>
          <h2>Subtotal: ₹{total}/-</h2>
          <div className="cart__giftCheck">
            <input type="checkbox" />
            <p>This order contains gift</p>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
      <div className="cart__items">
        {basketItems.length > 0 ? (
          <>
            <h2 className="cart__heading">Your shopping cart</h2>
            {basketItems.map((product) => (
              <CartItem {...product} />
            ))}
          </>
        ) : (
          <>
            <div className="cart__emptyBanner">
              <img
                src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                alt="cartempty"
                className="cart__emptyImage"
              />
              <div className="cart__emptyInfo">
                <h2>Your Amazon Basket is empty </h2>
                <button onClick={() => history.replace("/")}>Add some</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
