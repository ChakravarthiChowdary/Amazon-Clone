import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";

const Header = () => {
  const basketItems = useAppSelector((state) => state.data.basketItems);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="amazonlogo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <span className="header__firstElement">Hello, Sign In</span>
          <span className="header__secondElement">Sign In</span>
        </Link>
        <Link to="/checkout" className="header__link">
          <span className="header__firstElement">Returns</span>
          <span className="header__secondElement">&Orders</span>
        </Link>
        <Link to="/" className="header__link">
          <span className="header__firstElement">Your</span>
          <span className="header__secondElement">Prime</span>
        </Link>
        <Link to="/cart" className="header__cart">
          <Cart />
          <span>{basketItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
