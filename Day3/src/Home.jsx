import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="row g-4 mt-4 mx-1">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img
              src={product.image}
              className="object-fit-contain pt-5"
              style={{ maxHeight: '300px' }}
              alt=""
            />
            <div className="card-body d-flex flex-column justify-content-end">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
