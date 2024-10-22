import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addToCartSlice"


const store = configureStore({
  reducer : {
    addToCart : addToCartSlice ,
  }
})

export default store;