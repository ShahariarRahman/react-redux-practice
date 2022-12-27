import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadProductData from "../redux/thunk/products/fetchProducts";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData())
  }, [dispatch]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
