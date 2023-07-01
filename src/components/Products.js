import '../App.css';
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    const fetchProducts = async () => {
      try {
        // Make API call to fetch the products data
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        // Set the products state with the received data
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []);

  return (
    <div className='product-card'>
      <h2>Products</h2>
      <ul className='products-list'>
        {products.map((product) => (
          <li className='product' key={product.id}>
            <img className='prod-img' src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
