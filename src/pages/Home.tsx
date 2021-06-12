import React from "react";
import Banner from "../components/Banner";
import Product from "../components/Product";
import { products } from "../data";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__products">
        {products.slice(0, 2).map((product) => (
          <Product {...product} />
        ))}
      </div>
      <div className="home__products">
        {products.slice(2, 5).map((product) => (
          <Product {...product} />
        ))}
      </div>
      <div className="home__products">
        {products.slice(5).map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
