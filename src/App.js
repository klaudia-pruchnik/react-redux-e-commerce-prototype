import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

// myCart btn - toggle cart
// Add to cart on a product - adding
// increase quantity
// + - increase/decrease quantity (if 0 prod. disappears)

export default App;
