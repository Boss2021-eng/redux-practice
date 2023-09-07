import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // const datetime = new Date();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag is </h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div>
      <section className="cart">
        <header>
          <h2>Your bag </h2>
        </header>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(openModal());
            }}
          >
            clear cart
          </button>
        </footer>
      </section>
    </div>
  );
};

export default CartContainer;
