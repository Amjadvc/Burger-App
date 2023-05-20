import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch(
      "https://res-burger-app.herokuapp.com/created-products"
    );
    const data = await res.json();
    return data;
  }
);

export const fetchOldProducts = createAsyncThunk(
  "productsSlice/fetchOldProducts",
  async () => {
    const res = await fetch("https://res-burger-app.herokuapp.com/products");
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  initialState: { products: [], creativeProducts: [] },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    ///Modify your Redux store to include the new data:
    builder.addCase(fetchOldProducts.fulfilled, (state, action) => {
      state.creativeProducts = action.payload;
    });
    //end of modify
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
