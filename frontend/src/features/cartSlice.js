import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { getProductDetails } from './productSlice'

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

const cart = { cartItems: [] }

//------------------------ ADD TO CART ---------------------------//

export const addingToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ qty, itemId }, { dispatch, getState }) => {
    //if i added memoizing i can change this line and make it dispatch it everytime as it woulsnt effect it ?

    let data = getState().productDetails.items

    //To check if this object is empty or not, if its empty it will return 0
    if (Object.keys(getState().productDetails.items).length === 0) {
      await dispatch(getProductDetails({ productId: itemId }))
      data = getState().productDetails.items
    }

    //localStorage.setItem('cartItems', JSON.stringify(cartItems))

    return {
      itemId: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    }

    //is this what i am returning as payload ? or should i dispatch it somewhere ?
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: cart,
  reducers: {},
  extraReducers: {
    [addingToCart.fulfilled]: (state, action) => {
      const item = action.payload
      console.log(current(state.cartItems))
      const existItem = state.cartItems.find((x) => x.itemId === item.itemId)
      console.log(existItem)
      if (existItem) {
        state.cartItems.map((x) => (x.itemId === existItem.itemId ? item : x))
      } else {
        state.cartItems = [...state.cartItems, action.payload]
      }
    },
  },
})

export const selectCart = (state) => state.cart
export const CartReducer = cartSlice.reducer
