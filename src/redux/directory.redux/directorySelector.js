import { createSelector } from "reselect";

const selectDirectory = state => state.directoryReducer;

export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
