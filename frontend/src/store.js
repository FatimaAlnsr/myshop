import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { productReducer } from './features/productsSlice'
import { ProductDetailsReducer } from './features/productSlice'
import { CartReducer } from './features/cartSlice'

const middleware = [...getDefaultMiddleware()]

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = { cart: { cartItems: cartItemsFromStorage } }

const reducer = combineReducers({
  productList: productReducer,
  productDetails: ProductDetailsReducer,
  cart: CartReducer,
})

const store = configureStore({
  reducer,
  initialState,
  middleware,
})

export default store
