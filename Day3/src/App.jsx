import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Login from './Login';
import Register from './Register';
import LayOut from './LayOut';
import LoginGuard from './LoginGuard';
import Cart from './Cart';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        {
          path: 'home',
          element: (
            <LoginGuard>
              <Home />
            </LoginGuard>
          ),
        },
        {
          path: '',
          element: (
            <LoginGuard>
              <Home />
            </LoginGuard>
          ),
        },
        {
          path: 'categories',
          element: (
            <LoginGuard>
              <Categories />
            </LoginGuard>
          ),
        },
        {
          path: 'cart',
          element: (
            <LoginGuard>
              <Cart />
            </LoginGuard>
          ),
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
