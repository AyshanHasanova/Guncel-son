import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl mb-4">Səbət boşdur.</h2>
        <Link to="/store" className="text-blue-600 underline">Mağazaya qayıt</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-6 font-semibold">Sənin səbətin</h1>

      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center border-b py-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex flex-col ml-4 flex-grow">
              <span className="font-semibold text-lg">{item.name}</span>
              <span className="text-gray-600">{item.price}₼</span>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold">{(item.price * item.quantity).toFixed(2)}₼</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:underline mt-2"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Səbəti boşalt
        </button>
        <div className="text-xl font-semibold">
          Ümumi: {totalPrice.toFixed(2)}₼ ({totalQuantity} məhsul)
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          onClick={() => alert('Checkout funksiyası əlavə ediləcək')}
        >
          Sifarişi təsdiqlə
        </button>
      </div>
    </div>
  );
};

export default Cart;
