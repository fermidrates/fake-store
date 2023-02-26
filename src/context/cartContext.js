import { createContext } from "react";

const CartContext = createContext({
  cartProduct: [],
  setCartProduct: (product) => {},
});

export default CartContext;
