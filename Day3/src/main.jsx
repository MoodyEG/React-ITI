import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TokenContextProvider from './Contexts/TokenContext.jsx';
import { Bounce, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import myStore from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <TokenContextProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          limit={4}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Bounce}
        />
      </TokenContextProvider>
    </Provider>
  </StrictMode>
);
