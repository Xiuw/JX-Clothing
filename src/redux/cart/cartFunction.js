export const addingItem = (cartItems, toBeAddItem) => {
  const itemExist = cartItems.find(cartItem => cartItem.id === toBeAddItem.id);
  if (itemExist) {
    //if item exist
    return cartItems.map(
      (
        cartItem // map thru cartItems
      ) =>
        cartItem.id === toBeAddItem.id // inside the loop, if cartItem[i], id is equal to the toBeAdditem
          ? {
              //if true, return the item with its quantity+1
              quantity: cartItem.quantity + 1
            }
          : { cartItem } //else do nothing return the current cartItem
    );
  }
  return [...cartItems, { ...toBeAddItem, quantity: 1 }];
  // for item does not exist, return the state, and add toBeAddItem with its quantity with 1ß
};
