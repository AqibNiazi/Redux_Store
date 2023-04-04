import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
const Products = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductList(data);
    console.log(data);
  };
  const handleAdd = (products) => {
    dispatch(add(products));
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10">
      {productList.map((products) => {
        return (
          <div className="flex flex-col mx-4 my-4 rounded shadow-lg overflow-hidden h-min">
            <div className="mx-auto">
              <img
                src={products.image}
                alt="products Iamges"
                className="w-full h-48"
              />
            </div>
            <h2 className="px-4 font-bold">{products.title}</h2>
            <p className="px-4">{products.category}</p>
            <h3 className="px-4 font-semibold">${products.price}</h3>
            <div className="flex justify-center pb-6">
              <button
                className=" px-3 py-2 bg-blue-400 text-white rounded-md"
                onClick={() => handleAdd(products)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
