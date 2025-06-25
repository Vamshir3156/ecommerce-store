# React E-Commerce Store

A simple and responsive online store built with React. Features product listings, category filtering, search functionality, cart management, and a clean UI.

## Features

- Browse products by category
- Search products by name
- Add products to cart and update quantities
- Remove products from cart
- View total price in cart
- Responsive design with CSS Grid and Flexbox

## Technologies Used

- React
- React Context API (for state management)
- CSS Modules for styling

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/ecommerce-store.git
   cd ecommerce-store
   ```

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

## Project Structure

src/
├── components/
│ ├── CartPage.js
│ ├── Navbar.js
│ ├── ProductCard.js
│ └── ...
├── context/
│ └── CartContext.js
├── data/
│ └── products.js
├── pages/
│ ├── Home.js
│ └── ...
├── App.js
├── index.js
└── ...
