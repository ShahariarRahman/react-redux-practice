import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import loadProductData from "../redux/thunk/products/fetchProducts";

const Home = () => {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData())
  }, [dispatch]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {products.map(product => <ProductCard key={product._id} product={product} />)}
    </div>
  );
};

export default Home;
