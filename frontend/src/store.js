import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { productReducer } from './features/productsSlice'

const middleware = [...getDefaultMiddleware()]

const initialState = {}

const store = configureStore({
  reducer: {
    productList: productReducer,
  },
  initialState,
  middleware,
})

export default store
