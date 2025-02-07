import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const upadtedItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (upadtedItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== action.payload.title
        );
      } else {
        upadtedItem.quantity--;
      }
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const storeActions = cartSlice.actions;

export default store;


