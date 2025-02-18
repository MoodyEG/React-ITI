import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.jsx';

const myStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default myStore;
