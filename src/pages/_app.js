import { useState } from "react";

import { CartContext } from "@/context/CartContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
