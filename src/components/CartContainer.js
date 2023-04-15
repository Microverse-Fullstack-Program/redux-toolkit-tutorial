import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>Your bag</h2>
      </header>
      {/* cart items */}
      { amount < 1 ? (
        <h4 className='empty-cart'>is currently empty</h4>
      ) : ( 
      <>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        {/* cart footer */}
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
            clear cart
          </button>
        </footer>
      </>
      )};
    </section>
  );
};

export default CartContainer;