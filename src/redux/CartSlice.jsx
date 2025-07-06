import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalQuantity:0,
  totalPrice:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
      const newItem = action.payload;
      const itemIndex = state.products.find((item)=> item.id === newItem.id)
    }
  },
});

export default cartSlice.reducer;
