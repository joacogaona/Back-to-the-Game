import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import productsReducer from "./products-reducer";
import usersReducer from "./users-reducer";
import searchReducer from "./search-reducer";
import cartReducer from "./cart-reducer";
import checkoutReducer from "./checkout-reducer";

export default combineReducers({
  productReducer,
  productsReducer,
  searchReducer,
  usersReducer,
  cartReducer,
  checkoutReducer,
});
