import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Burası DÜZGÜN import edilmiş hali
import logger from "redux-logger";
import clientReducer from "../redux/reducers/clientReducer";
import productReducer from "../redux/reducers/productReducer";
import shoppingCartReducer from "../redux/reducers/shoppingCartReducer";

// Tüm reducer'ları birleştir
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

// Store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
