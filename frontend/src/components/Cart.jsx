// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container absolute top-12 right-0 w-80 bg-white border border-gray-300 shadow-lg p-4 z-50">
      <h3 className="text-xl font-bold mb-4">Səbətiniz</h3>
      {cartItems.length === 0 ? (
        <p>Səbətiniz boşdur.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b py-2">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price} ₼ x {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <h4 className="text-lg font-bold">Ümumi Qiymət: {total.toFixed(2)} ₼</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;