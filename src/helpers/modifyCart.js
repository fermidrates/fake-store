const modifyCart = (cartProduct, product, action = "add") => {
  const ID = product.id;
  const cartIDs =
    cartProduct.map((product) => {
      return product.id;
    }) || [];

  let unfilteredCart = [];
  if (!cartIDs.includes(ID)) {
    let quantifiedProduct = Object.assign({}, product);
    quantifiedProduct["quantity"] = 1;
    unfilteredCart = cartProduct.concat(quantifiedProduct);
  } else {
    const updatedCart = cartProduct.map((product, index) => {
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
  return unfilteredCart.filter((product) => product.quantity !== 0);
};

export default modifyCart;
