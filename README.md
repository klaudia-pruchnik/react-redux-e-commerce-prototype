# Redux E-commerce Prototype

This project is a simple shopping cart application built with React and Redux Toolkit. It allows users to add, remove, and manage product quantities dynamically. The UI updates based on the global state managed by Redux.

## Features

- **Toggle Cart** – Open and close the cart using a button.
- **Add to Cart** – Add products to the cart with a single click.
- **Quantity Control** – Increase or decrease product quantity.
- **Remove Items** – Automatically remove products when the quantity reaches zero.

## Technologies Used

- **React.js**
- **Redux Toolkit (createSlice, useSelector, useDispatch)**
- **React Hooks (useState, useEffect)**
- **CSS Modules for styling**

## Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository:
  `git clone https://github.com/klaudia-pruchnik/redux-e-commerce-prototype.git`
  `cd redux-shopping-cart`
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`

## How It Works
- The application fetches and displays products.
- Users can add products to the cart.
- The cart dynamically updates and shows total price/quantity.
- Users can increase/decrease quantities or remove products.
- The application maintains global state using Redux.

## License:
This project is for educational purposes and created as part of the React course on Udemy.
