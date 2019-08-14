import {
  GET_COLLECTIONS_PENDING,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE
} from "./shopConstant";

const initialState = {
  collection: null,
  isPending: false,
  errorPending: undefined
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS_PENDING:
      return { ...state, isPending: true };
    case GET_COLLECTIONS_SUCCESS:
      return { ...state, isPending: false, collection: action.payload };
    case GET_COLLECTIONS_FAILURE:
      return { ...state, isPending: false, errorPending: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
