import { CartProductType } from "../types";

const calculateCartItems = (cartProduct: Array<CartProductType>):number => {
  const quantity =
    cartProduct.reduce((acc: number, curr: CartProductType) => acc + curr.quantity, 0) || 0;
  return quantity;
};

export default calculateCartItems;
