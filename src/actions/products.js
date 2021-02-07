import {db} from '../firebase/firebase-config';
import { loadProducts } from '../helpers/loadProducts';
import { types } from '../types/types';

export const startGettingProducts = () => {
    return async(dispatch) => {
        const products = await loadProducts();
        dispatch(setProducts(products));
    }
}

export const setProducts = (products) => ({
    type: types.productSetItems,
    payload: products
});