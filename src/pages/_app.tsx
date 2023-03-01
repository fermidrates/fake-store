import { useState } from "react";

import { CartProductType } from "../types";

import CartContext from "../context/cartContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cartProduct, setCartProduct] = useState<CartProductType[]>([]);

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
