import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LayOut from './LayOut';
import LoginGuard from './LoginGuard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home = lazy(() => import('./Home'));
const Categories = lazy(() => import('./Categories'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Cart = lazy(() => import('./Cart'));
const queryClient = new QueryClient();

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        {
          // Home
          path: 'home',
          element: (
            <LoginGuard>
              <Suspense>
                <Home />
              </Suspense>
            </LoginGuard>
          ),
        },
        {
          // Home
          path: '',
          element: (
            <LoginGuard>
              <Suspense>
                <Home />
              </Suspense>
            </LoginGuard>
          ),
        },
        {
          // Categories
          path: 'categories',
          element: (
            <LoginGuard>
              <Suspense>
                <Categories />
              </Suspense>
            </LoginGuard>
          ),
        },
        {
          // Cart
          path: 'cart',
          element: (
            <LoginGuard>
              <Suspense>
                <Cart />
              </Suspense>
            </LoginGuard>
          ),
        },
        {
          // Login
          path: 'login',
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          // Register
          path: 'register',
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
