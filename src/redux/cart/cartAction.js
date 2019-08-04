import { CART_TOGGLE, ADD_ITEM_TO_CART } from "./cartConstant";

export const cartToggle = cart => ({
  type: CART_TOGGLE
});

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});
