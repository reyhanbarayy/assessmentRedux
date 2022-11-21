import { combineReducers } from "redux";
import categoriesReducer from "./CategoriesReducer";
import ProductsReducer from "./ProductsReducer";
import ProductReducer from "./ProductReducer";

const reducers = combineReducers({
    categoriesReducer,
    ProductsReducer, 
    ProductReducer,
})

export default reducers;