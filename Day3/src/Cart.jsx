import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products?limit=3'
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container text-white">
      {products.map((product) => (
        <div className="row my-3" key={product.id}>
          <div className="col-md-4">
            <img
              src={product.image}
              alt="Product"
              style={{ height: '200px' }}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
