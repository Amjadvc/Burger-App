import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  // check if there is any data in local storage

  initialState: JSON.parse(localStorage.getItem("cart")) || [],

  name: "cartSlice",

  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      //update the local storage for add sandwitch
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteFromCart: (state, action) => {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },

    clear: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },

    increase: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrease: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, deleteFromCart, clear, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
