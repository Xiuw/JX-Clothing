import { createSelector } from "reselect";

const selectCollectionItems = state => state.shopReducer;

export const selectCollection = createSelector(
  [selectCollectionItems],
  item => item.collection
);

export const selectForPreview = createSelector(
  [selectCollection],
  category => Object.keys(category).map(key => category[key])
);
export const selectCategory = categoryParam => {
  return createSelector(
    [selectCollection],
    category => category[categoryParam]
  );
};
