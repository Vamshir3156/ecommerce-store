import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };

  if (cartItems.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>Cart is empty</p>
    );

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "0 1rem" }}>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - $
            {(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        style={{
          marginTop: "1rem",
          backgroundColor: "#f0a500",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Complete Purchase
      </button>
    </main>
  );
}
