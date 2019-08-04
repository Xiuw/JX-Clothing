import { CART_TOGGLE, ADD_ITEM_TO_CART } from "./cartConstant";

import { addingItem } from "./cartFunction";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addingItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
