import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Login from './Login';
import Register from './Register';
import LayOut from './LayOut';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'categories',
          element: <Categories />,
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
