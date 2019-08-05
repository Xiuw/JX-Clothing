import { createSelector } from "reselect";

const selectUser = state => state.userReducer;

export const selectAuthUser = createSelector(
  [selectUser],
  user => user.authUser
);
