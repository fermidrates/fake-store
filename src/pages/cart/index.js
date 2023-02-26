import React, { useContext } from "react";
import Image from "next/image";

import NavBar from "../components/NavBar";

import calculateCartItems from "@/helpers/calculateCartItems";
import modifyCart from "@/helpers/modifyCart";

import CartContext from "@/context/cartContext";

const Cart = () => {
  const { cartProduct, setCartProduct } = useContext(CartContext);

  const handleQuantityChange = (index, action) => {
    const chosenProduct = cartProduct[index];
    const modifiedCart = modifyCart(cartProduct, chosenProduct, action);
    setCartProduct(modifiedCart);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <NavBar />
      {!Boolean(calculateCartItems(cartProduct)) ? (
        <div className="h-screen flex flex-1 text-xl justify-center items-center">
          No Product in Cart!
        </div>
      ) : (
        <main className="flex flex-1 flex-col">
          {cartProduct?.map((product, index) => {
            return (
              <div
                key={index}
                className="p-4 m-4 h-48 border rounded flex md:mx-auto md:w-3/4"
              >
                <Image src={product.image} width={100} height={100} alt="" />
                <div className="flex items-center">
                  <div className="inline px-3">
                    <p className="mb-1 text-gray-700">{product.title}</p>
                    <strong className="mb-3">${product.price}</strong>
                    <div className="flex gap-4">
                      <button
                        className="border bg-white hover:border px-2"
                        onClick={() => handleQuantityChange(index, "subtract")}
                      >
                        -
                      </button>
                      <strong>{product.quantity}</strong>
                      <button
                        className="border bg-purple-300 hover:bg-hover-400 px-2"
                        onClick={() => handleQuantityChange(index, "add")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
};

export default Cart;
