import React from "react";
import Products from "../Container/products/Products";
const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <h2 className="font-bold ">Products</h2>
      </div>
      <Products />
    </>
  );
};

export default Home;
