import { createSelector } from "reselect";

const selectCollectionItems = state => state.shopReducer;

export const selectCollection = createSelector(
  [selectCollectionItems],
  item => item.collection
);

const Map_Category_To_Id = {
  hats: 1,
  sneaker: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const selectCategory = categoryParam => {
  return createSelector(
    [selectCollection],
    category =>
      category.find(
        category => category.id === Map_Category_To_Id[categoryParam]
      )
  );
};
