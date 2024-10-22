import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our E-commerce Platform</h1>
      <ProductList />
    </div>
  );
};

export default Home;