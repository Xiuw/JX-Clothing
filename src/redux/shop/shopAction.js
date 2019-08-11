import { GET_COLLECTIONS } from "./shopConstant";

export const getCollections = collections => ({
  type: GET_COLLECTIONS,
  payload: collections
});
