import { useState } from 'react';
import zilean from './assets/1.jpg';
import briar from './assets/2.1.jpg';
import jeff from './assets/3.jpg';
import megaman from './assets/4.1.gif';

export default function Lab1() {
  const list = [
    { id: 1, img: zilean, title: 'Zilean', price: 420 },
    { id: 2, img: briar, title: 'Briar', price: 1337 },
    { id: 3, img: jeff, title: 'Jeffery', price: 84 },
    { id: 4, img: megaman, title: 'X & Zero', price: 999 },
  ];
  const [products, setProducts] = useState(list);

  function updatePrice(id) {
    const newPrice = +document.getElementById(`input-${id}`).value;
    setProducts(
      products.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    );
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  function searchProduct(search) {
    setProducts(
      list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    );
  }

  return (
    <>
      <h1>Lab1</h1>
      <input
        className="form-control w-75 mb-5 mx-auto"
        type="search"
        placeholder="Search"
        onKeyUp={(e) => searchProduct(e.target.value)}
      />
      <div className="d-flex g-2 my-2 row">
        {products.map((product) => (
          <div className="card col-3 mx-auto" key={product.id}>
            <img
              src={product.img}
              className="card-img-top object-fit-contain w-75 mx-auto"
              alt=""
            />
            <div className="card-body text-start">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <input
                type="number"
                className="border-success rounded-3 col-5"
                id={`input-${product.id}`}
              />
              <button
                className="btn btn-primary mt-2 col-5"
                onClick={() => updatePrice(product.id)}
              >
                Update
              </button>
            </div>
            <button
              className="btn btn-danger mt-2"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
