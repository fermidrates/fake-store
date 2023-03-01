import { CartProductType, ProductType } from "../types";

const modifyCart = (cartProduct: CartProductType[], product: ProductType, action: "add" | "subtract" = "add"):CartProductType[] => {
  const ID = product.id;
  const cartIDs =
    cartProduct.map((product: CartProductType) => {
      return product.id;
    }) || [];

  let unfilteredCart = [];
  if (!cartIDs.includes(ID)) {
    let quantifiedProduct: CartProductType = Object.assign({quantity: 1}, product);
    unfilteredCart = cartProduct.concat(quantifiedProduct);
  } else {
    const updatedCart = cartProduct.map((product: CartProductType, index: number) => {
      const cartItem = Object.assign({}, product);
      if (index === cartIDs.indexOf(ID)) {
        cartItem.quantity =
          action === "add"
            ? Number(cartItem.quantity) + 1
            : Number(cartItem.quantity) - 1;
      }
      return cartItem;
    });
    unfilteredCart = updatedCart;
  }
  return unfilteredCart.filter((product: CartProductType) => product.quantity !== 0);
};

export default modifyCart;
