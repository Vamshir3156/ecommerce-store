import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
    clearCart();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "1rem 0",
              }}
            >
              <div style={{ flex: 1 }}>{item.name}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => handleDecrease(item)}>-</button>
                <span style={{ margin: "0 0.75rem" }}>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: "1rem",
                  padding: "0.25rem 0.5rem",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 style={{ marginTop: "1.5rem" }}>
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={handleBuyNow}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 2rem",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}
