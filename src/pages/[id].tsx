import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

import modifyCart from "../helpers/modifyCart";

import { ProductType } from "../types";

import CartContext from "../context/cartContext";

import { BASE_PRODUCT_URL } from "../constants";

export const getStaticPaths = async () => {
  const res = await fetch(BASE_PRODUCT_URL);
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(BASE_PRODUCT_URL + `/${id}`);
  const data = await res.json();

  return {
    props: { id, product: data },
  };
};

const Product = ({ id, product }) => {
  const { cartProduct, setCartProduct } = useContext(CartContext);

  const [relatedProduct, setRelatedProduct] = useState<ProductType[]>([]);

  const getRelatedProducts = async () => {
    const res = await fetch(
      BASE_PRODUCT_URL + "/category" + `/${product.category}`
    );
    const data = await res.json();
    const filteredData = data.filter((datum: ProductType) => datum.id !== +id);

    setRelatedProduct(filteredData);
  };

  useEffect(() => {
    getRelatedProducts();
  }, []);

  const handleAddToCart = () => {
    const modifiedCart = modifyCart(cartProduct, product);
    setCartProduct(modifiedCart);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <NavBar />
      <main className="flex-1">
        <div className="p-4 mx-auto my-4 flex justify-center flex-col w-full md:grid md:grid-cols-2 md:w-[600px]">
          <div className="flex justify-center">
            <Image
              src={product.image}
              width={200}
              height={200}
              alt=""
              className="mx-3"
            />
          </div>

          <div className="mx-3 shadow rounded">
            <p className="font-sans text-md px-4">{product.title}</p>
            <label className="mx-4 px-2 rounded-full font-mono text-sm bg-red-300 inline-block mb-3">
              {product.category}
            </label>
            <p className="font-sans text-lg px-4">${product.price}</p>
            <div className="font-sans text-sm px-4">{product.description}</div>
            <div className="flex justify-between mt-4 p-4">
              <div>
                {product.rating.rate} stars&nbsp;({product.rating.count}{" "}
                reviews)
              </div>
              <button
                className="px-3.5 py-1.5 bg-purple-300 flex justify-center rounded-full hover:bg-purple-400"
                onClick={() => handleAddToCart()}
              >
                <Image src={"/cart.svg"} width={24} height={24} alt={""} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg: m-8">
          You might want to see these products
          <div className="flex gap-2 overflow-x-auto">
            {relatedProduct.map((product: ProductType) => {
              return (
                <ProductCard
                  data={product}
                  withCartButton={false}
                  onButtonClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
