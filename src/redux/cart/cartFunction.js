export const addingItem = (cartItems, toBeAddItem) => {
  const itemExist = cartItems.find(cartItem => cartItem.id === toBeAddItem.id);
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

export const removingItem = (cartItems, toBeRemoveItem) => {
  const itemExist = cartItems.find(
    cartItem => cartItem.id === toBeRemoveItem.id
  );
  if (itemExist.quantity === 1) {
    //if the quantity of an existing item is 1
    return cartItems.filter(cartItem => cartItem.id === toBeRemoveItem.id); //remove the item from the cartItem
  }
  //if above condition does not meet
  return cartItems.map((
    cartItem // return the item with quantity - 1
  ) =>
    cartItem.id === toBeRemoveItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { cartItem }
  );
};

export const deletingItem = (cartItems, toBeDeleteItem) => {
  return cartItems.filter(cartItem => cartItem.id !== toBeDeleteItem.id);
};
