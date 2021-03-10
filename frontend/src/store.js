import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { productReducer } from './features/productsSlice'
import { ProductDetailsReducer } from './features/productSlice'

const middleware = [...getDefaultMiddleware()]

const initialState = {}

const reducer = combineReducers({
  productList: productReducer,
  productDetails: ProductDetailsReducer,
})

const store = configureStore({
  reducer,
  initialState,
  middleware,
})

export default store
