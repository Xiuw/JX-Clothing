import ITEM_DATA from "./item.data";

const initialState = {
  collection: ITEM_DATA
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
