import { createSelector } from "reselect";

const selectCollectionItems = state => state.shopReducer;

export const selectCollection = createSelector(
  [selectCollectionItems],
  item => item.collection
);

export const selectForPreview = createSelector(
  [selectCollection],
  category => (category ? Object.keys(category).map(key => category[key]) : [])
);

export const selectCategory = categoryParam => {
  console.log(categoryParam);
  return createSelector(
    [selectCollection],
    category => (category ? category[categoryParam] : null)
  );
};

export const selectCollectionPending = createSelector(
  [selectCollectionItems],
  item => item.isPending
);

export const selectIsCollectionLoaded = createSelector(
  [selectCollectionItems],
  item => !!item.collection
);
