import {
  CART_TOGGLE,
  ADD_ITEM_TO_CART,
  DELETE_CART_ITEM,
  REMOVE_A_ITEM
} from "./cartConstant";

export const cartToggle = cart => ({
  type: CART_TOGGLE
});

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});

export const deleteCartItem = item => ({
  type: DELETE_CART_ITEM,
  payload: item
});

export const removeAItem = item => ({
  type: REMOVE_A_ITEM,
  payload: item
});
