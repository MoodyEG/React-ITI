// import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getProducts } from './redux/cartSlice';
import Loader from './Loader';

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, loading, products } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
  }, [dispatch]);

  const cart = cartItems.map((cartItem) => {
    const product = products.find(
      (product) => product.id === cartItem.productId
    );
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  return (
    <div className="container text-white">
      {loading ? (
        <Loader />
      ) : (
        cart.map((product) => (
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
              <div className="d-flex justify-content-between">
                <span>Price: {product.price}</span>
                <span>Quantity: {product.quantity}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
