import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "",
  error: "",
};

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();

    if (!data) {
      console.log("No data in cart");

      return [];
    }

    return data.products;
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      state.products.push(action.payload);
    },
    remove: (state, action) => {
      let foundIndex;
      state.products.forEach((product, index) => {
        if (product._id === action.payload._id) {
          foundIndex = index;
        }
      });

      if (foundIndex !== undefined) {
        state.products.splice(foundIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addOne, remove } = cartSlice.actions;

export default cartSlice.reducer;
