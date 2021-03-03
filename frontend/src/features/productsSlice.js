import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//products initial state
const products = { items: [], status: null, error: null }

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('api/products')
    return response.data
  }
)

//get all the products from the backend
const productSlice = createSlice({
  name: 'product',
  initialState: products,
  reducers: {
    listProducts: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = 'loading'
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
  },
})

//selector to retrive all the products
export const selectAllProducts = (state) => state.productList

export const productReducer = productSlice.reducer
