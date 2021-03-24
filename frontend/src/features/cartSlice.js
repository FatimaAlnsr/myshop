import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductDetails } from './productSlice'

//the initial state for the local storage .. maybe i need to delete it later
//- added it here because if it's not available there will be a bug
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const cart = { cartItems: cartItemsFromStorage }

//------------------------ ADD TO CART ---------------------------//

export const addingToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ qty, itemId }, { dispatch, getState }) => {
    //if i added memoizing i can change this line and make it dispatch it everytime as it woulsnt effect it ?
    //or if i fixed where it is called

    //we get the items from the state as they are already available to us (product details) and use them for the cart
    let data = getState().productDetails.items

    //To check if this object is empty or not, if its empty it will return 0
    if (Object.keys(getState().productDetails.items).length === 0) {
      await dispatch(getProductDetails({ productId: itemId }))
      data = getState().productDetails.items
    }

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
      //takes the given item and check if it already exist inside the sorage if not it will simply add it
      //if its available it will replace it with the new one --- Note its not adding it but replacing
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.itemId === item.itemId)
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.itemId === existItem.itemId ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, action.payload]
      }
    },
  },
})

export const selectCart = (state) => state.cart
export const CartReducer = cartSlice.reducer
