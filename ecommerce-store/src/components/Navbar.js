// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const { cartItems } = useContext(CartContext);

//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         SHOP ME
//       </Link>
//       <button className="login-btn">Login</button>
//       <div>
//         <Link to="/cart" className="cart-link">
//           Cart ({totalQuantity})
//         </Link>
//       </div>
//     </nav>
//   );
// }
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link to="/" className="logo">
        SHOP ME
      </Link>

      {/* Right: Login + Cart side by side */}
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/cart" className="cart-link">
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}
