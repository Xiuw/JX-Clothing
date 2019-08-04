export const addingItem = (cartItems, toBeAddItem) => {
  console.log(cartItems);
  const itemExist = cartItems.find(cartItem => cartItem.id === toBeAddItem.id);
  console.log(itemExist);
  if (itemExist) {
    //if item exist
    return cartItems.map(
      (
        cartItem // map thru cartItems
      ) =>
        cartItem.id === toBeAddItem.id // inside the loop, if cartItem, id is equal to the toBeAdditem
          ? { ...cartItem, quantity: cartItem.quantity + 1 } //if true, return the item with its quantity+1
          : cartItem //else do nothing return the current cartItem
    );
  }
  return [...cartItems, { ...toBeAddItem, quantity: 1 }];
  // for item does not exist, return the state, and add toBeAddItem with its quantity with 1ß
};
