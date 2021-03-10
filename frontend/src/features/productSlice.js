import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const product = { items: {}, status: null, error: null }

export const getProductDetails = createAsyncThunk(
  'product/getProductDetails',
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/products/${productId}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message)
    }
  }
)

//get all the products from the backend
const productDetailsSlice = createSlice({
  name: 'product',
  initialState: product,
  reducers: {
    detailsProduct: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: {
    [getProductDetails.pending]: (state) => {
      state.status = 'loading'
    },
    [getProductDetails.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action.payload)
      state.error = action.payload.items
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
  },
})

// //selector to retrive a single product details - use the product ID
export const selectProductDetails = (state) => state.productDetails

export const ProductDetailsReducer = productDetailsSlice.reducer
