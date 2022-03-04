import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cartSlice';

import CartItem from './CartItem';

const CartList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.cartList);
  const total = useSelector((state) => state.cart.total);

  return (
    <div class="container my-3" style={{ maxWidth: 800 }}>
      <h1 class="text-center my-3" style={{ fontSize: 40, letterSpacing: 4 }}>
        Your bag
      </h1>
      <ul className="p-0">
        {list.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>

      <hr />

      <div
        class="d-flex justify-content-between text-primary align-items-center fw-bold"
        style={{ fontSize: 20, letterSpacing: 2 }}
      >
        <p>Total:</p>
        <p>${total}</p>
      </div>

      {list.length > 0 && (
        <button
          class="btn btn-outline-danger w-100 border-3 fw-bold"
          onClick={() => dispatch(clearCart())}
        >
          CLEAR{' '}
        </button>
      )}
    </div>
  );
};

export default CartList;
