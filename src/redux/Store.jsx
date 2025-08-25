import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";
import cartReducer from "./Slices/cartSlice"; 
const Store = configureStore({
    reducer : {
        cart : cartReducer,
    }
});
export default Store; 