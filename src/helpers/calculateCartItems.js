const calculateCartItems = (cartProduct) => {
  const quantity =
    cartProduct.reduce((acc, curr) => acc + curr.quantity, 0) || 0;
  return quantity;
};

export default calculateCartItems;
