import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleAmount,
  removeItem,
  getTotals,
} from '../redux/features/cartSlice';

const CartItem = ({ id, title, price, image, amount }) => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.cart.cartList);

  useEffect(() => {
    dispatch(getTotals());
  }, [list]);

  return (
    <div class="cart-item">
      <img src={image} />
      <div>
        <h4 class="text-primary">{title}</h4>
        <p class="text-secondary fw-bold">${price}</p>
        <button
          class="btn text-primary p-0"
          style={{ letterSpacing: 3 }}
          onClick={() => dispatch(removeItem({ id: id }))}
        >
          remove
        </button>
      </div>
      <div class="text-primary fw-bold text-center">
        <button
          class="btn text-primary p-0"
          onClick={() => dispatch(toggleAmount({ id: id, type: 'increment' }))}
        >
          <i class="fas fa-angle-up "></i>
        </button>
        <p class="m-0" style={{ fontSize: '1.3rem' }}>
          {amount}
        </p>
        <button
          class="btn text-primary p-0"
          onClick={() => dispatch(toggleAmount({ id: id, type: 'decrement' }))}
        >
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
