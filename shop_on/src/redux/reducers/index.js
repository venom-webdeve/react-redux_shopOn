import {combineReducers} from 'redux';
import { productsReducer, selectedProductReducer } from './ProductsReducer';

export const rootReducers = combineReducers({
    getAllProducts:productsReducer,
    getProductById:selectedProductReducer,
});