import { createSelector } from "reselect";

// input selector

const selectCart = state => state.cartReducer;

export const selectItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectItemsCount = createSelector(
  [selectItems],
  cartItems =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectTotal = createSelector(
  [selectItems],
  cartItems =>
    cartItems.reduce(
      (accQuantity, cartItem) =>
        accQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
