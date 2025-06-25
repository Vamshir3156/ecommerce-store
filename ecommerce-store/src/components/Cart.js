import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return <p className="empty-cart">Your cart is empty.</p>;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <strong>{item.name}</strong> x {item.quantity}
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
