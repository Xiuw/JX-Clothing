import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //use local storage , another choice is to use session storage
import directoryReducer from "./directory.redux/directoryReducer";
import shopReducer from "./shop/shopReducer";
const persistConfiguration = {
  key: "root", // start from the root
  storage, // use
  whitelist: ["cartReducer"] // string name of the reducer that's used ,which is cartReducer
};
const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  directoryReducer,
  shopReducer
});

export default persistReducer(persistConfiguration, rootReducer);
