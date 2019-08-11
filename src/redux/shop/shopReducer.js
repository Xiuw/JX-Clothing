import { GET_COLLECTIONS } from "./shopConstant";

const initialState = {
  collection: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return { ...state, collection: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
