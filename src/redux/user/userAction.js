import { SET_USER } from "./userConstant";
export const setUser = user => ({
  type: SET_USER,
  payload: user
});
