import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { toast, Bounce } from 'react-toastify';

export default function Home() {
  const [allProducts, setProducts] = useState([]);
  const [pageProducts, setPageProducts] = useState([]);
  const [page, setPage] = useState(1);

  const maxPage = Math.ceil(allProducts.length / 4);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const getProductsByPage = (page) => {
      const start = (page - 1) * 4;
      const end = page * 4 > allProducts.length ? allProducts.length : page * 4;
      setPageProducts(allProducts.slice(start, end));
    };
    getProductsByPage(page);
  }, [allProducts, page]);

  function changePage(page) {
    if (page < 1) return;
    if (page > maxPage) return;
    setPage(page);
  }

  const addToCart = async (productId) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/carts', {
        productId,
      });
      if (response.status === 200) {
        toast.success('Added to cart', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <div className="row g-4 mt-4 mx-1">
        {pageProducts.length === 0 && <Loader />}
        {pageProducts.map((product) => (
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
              <button
                className="btn btn-primary mt-2"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => changePage(page - 1)}
          disabled={page <= 1}
        >
          &laquo;
        </button>
        {page - 2 > 0 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => changePage(page - 2)}
          >
            {page - 2}
          </button>
        )}
        {page - 1 > 0 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => changePage(page - 1)}
          >
            {page - 1}
          </button>
        )}
        <button className="btn btn-primary me-2" disabled>
          {page}
        </button>
        {page + 1 <= maxPage && (
          <button
            className="btn btn-primary me-2"
            onClick={() => changePage(page + 1)}
          >
            {page + 1}
          </button>
        )}
        {page + 2 <= maxPage && (
          <button
            className="btn btn-primary me-2"
            onClick={() => changePage(page + 2)}
          >
            {page + 2}
          </button>
        )}
        <button
          className="btn btn-primary"
          onClick={() => changePage(page + 1)}
          disabled={page >= maxPage}
        >
          &raquo;
        </button>
      </div>
    </>
  );
}
