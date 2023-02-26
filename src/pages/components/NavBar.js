import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import calculateCartItems from "@/helpers/calculateCartItems";

import { CartContext } from "@/context/CartContext";

const NavBar = () => {
  const { cartProduct } = useContext(CartContext);

  return (
    <div className="p-4 bg-orange-500 justify-between flex lg:w-52 lg:flex-col lg:justify-start lg:items-center lg:gap-4">
      <Image src={"/favicon.ico"} width={30} height={30} alt={""} />
      <div className="gap-4 flex lg:flex-col">
        <Link href={"/"}>
          <p className="hover:underline hover:underline-offset-4">Home</p>
        </Link>
        <Link href={"/cart"}>
          <p className="hover:underline hover:underline-offset-4">
            Cart: {calculateCartItems(cartProduct)}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
