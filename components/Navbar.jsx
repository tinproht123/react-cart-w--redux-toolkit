import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../redux/features/cartSlice';

const Navbar = () => {
  const amount = useSelector((state) => state.cart.amount);
  const list = useSelector((state) => state.cart.cartList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [list]);

  return (
    <nav class="bg-primary text-white">
      <div class="container p-3 d-flex justify-content-between align-items-center">
        <h1>React Cart</h1>
        <button class="btn text-white position-relative">
          <i class="fa fa-cart-shopping fa-2x"></i>
          <span
            class="position-absolute badge translate-middle top-0 bg-danger rounded-circle"
            style={{ fontSize: 16 }}
          >
            {amount}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
