import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { productReducer, ProductDetailsReducer } from './features/productsSlice'

const middleware = [...getDefaultMiddleware()]

const initialState = {}

const store = configureStore({
  reducer: {
    productList: productReducer,
    productDetails: ProductDetailsReducer,
  },
  initialState,
  middleware,
})

export default store
