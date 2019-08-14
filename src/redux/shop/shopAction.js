import {
  GET_COLLECTIONS_PENDING,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILURE
} from "./shopConstant";
import { firestore, convertCollectionsToMap } from "../../firebase/Firebase";

export const getCollectionsPending = () => ({
  type: GET_COLLECTIONS_PENDING
});

export const getCollectionsSuccess = collections => ({
  type: GET_COLLECTIONS_SUCCESS,
  payload: collections
});

export const getCollectionsFailure = error => ({
  type: GET_COLLECTIONS_FAILURE,
  payload: error
});
export const requestCollections = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(getCollectionsPending());
    collectionRef
      .get()
      .then(snapshot => {
        const collections = convertCollectionsToMap(snapshot);
        dispatch(getCollectionsSuccess(collections));
      })
      .catch(error => dispatch(getCollectionsFailure(error)));
  };
};
