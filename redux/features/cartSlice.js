import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../src/data';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: cartItems,
    total: 0,
    amount: 0,
  },
  reducers: {
    toggleAmount: (state, action) => {
      let tempCart = state.cartList
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'increment') {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === 'decrement') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cartList: tempCart };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    getTotals: (state) => {
      let { total, amount } = state.cartList.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total).toFixed(2);
      return { ...state, total, amount };
    },
    clearCart: (state) => {
      return { ...state, cartList: [] };
    },
  },
});

export const { toggleAmount, removeItem, getTotals, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
