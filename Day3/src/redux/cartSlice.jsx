import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const { data } = await axios.get('https://fakestoreapi.com/carts/1');
  // console.log(data.products);

  return data.products;
});

export const getProducts = createAsyncThunk('cart/getProducts', async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  // console.log(data);
  return data;
});

const initialState = {
  cartItems: [],
  products: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });
  },
});

export default cartSlice.reducer;
