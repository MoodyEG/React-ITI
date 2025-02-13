import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    setCategories(data);
  };

  const fetchProductsByCategory = async (selectedCategory) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${selectedCategory}`
    );
    setProducts(data);
    setLoading(false);
  };

  return (
    <div className="text-white">
      <h1>Categories</h1>
      {categories.length === 0 && <Loader />}
      <div className="row row-cols-auto d-flex flex-row mx-2 g-3">
        {categories.map((category) => (
          <button
            key={category}
            className="btn col-12 col-sm-6 col-md-4 col-lg-3 rounded-4 p-2 text-center bg-white text-black"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h2 className="mt-4">Products in {selectedCategory}</h2>
          <div className="row g-4 mt-4 mx-1">
            {loading && <Loader />}
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
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
        </div>
      )}
    </div>
  );
}
