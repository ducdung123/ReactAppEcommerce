import { combineReducers } from 'redux';
import listProducts from './listProducts';
import wishList from './wishList';
import cartList from './cartList';
import listCompareProduct from './listCompareProduct';
import productView from './productView';
const myReducer = combineReducers({
    listProducts,
    wishList,
    cartList,
    listCompareProduct,
    productView,
});

export default myReducer;