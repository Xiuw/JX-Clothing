import { SET_USER } from "./userConstant";

const initialState = {
  authUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authUser: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
