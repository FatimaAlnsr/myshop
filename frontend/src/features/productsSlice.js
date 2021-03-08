import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//------------------------ Getting All products -------------------------//

//products initial state
const products = { items: [], status: null, error: null }

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('api/products')
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message)
    }
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
      console.log(action.payload)
      state.error = action.payload
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

//------------------------ Getting Single product -------------------------//

// export const getProductDetails = createAsyncThunk(
//   'products/getProductDetails',
//   async ({ productId }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`api/products/${productId}`)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || error.message)
//     }
//   }
// )

// export const getProductDetails = createAsyncThunk(
//   'products/getProductDetails',
//   async ({ productId }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`api/products/${productId}`)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || error.message)
//     }
//   }
// )

// //get single product details from the backend
// const productDetailsSlice = createSlice({
//   name: 'products',
//   initialState: product,
//   reducers: {
//     detailsProduct: (state, action) => {
//       state.items = action.payload
//     },
//   },
//   extraReducers: {
//     [getProductDetails.pending]: (state) => {
//       state.status = 'loading'
//     },
//     [getProductDetails.rejected]: (state, action) => {
//       state.status = 'failed'
//       state.error = action.payload
//     },
//     [getProductDetails.fulfilled]: (state, action) => {
//       state.status = 'success'
//       state.items = action.payload
//     },
//   },
// })

// //selector to retrive a single product details - use the product ID
// export const selectProductDetails = (state) => state.productList

// export const ProductDetailsReducer = productDetailsSlice.reducer

const product = { items: {}, status: null, error: null }

export const getProductDetails = createAsyncThunk(
  'products/getProducts',
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`api/products/${productId}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message)
    }
  }
)

//get all the products from the backend
const productDetailsSlice = createSlice({
  name: 'products',
  initialState: product,
  reducers: {},
  extraReducers: {
    [getProductDetails.pending]: (state) => {
      state.status = 'loading'
    },
    [getProductDetails.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action.payload)
      state.error = action.payload
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
  },
})

// //selector to retrive a single product details - use the product ID
export const selectProductDetails = (state) => state.productList

export const ProductDetailsReducer = productDetailsSlice.reducer
