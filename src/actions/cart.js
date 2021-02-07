import { types } from "../types/types";

export const addItem = (item) => ({
    type: types.cartAddItem,
    payload: item
});

export const setCartItems = (cartItems) => ({
    type: types.cartSetItems,
    payload: cartItems
});

export const deleteItems = () => ({
    type: types.cartDeleteItems
});