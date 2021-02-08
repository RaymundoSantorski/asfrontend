import { types } from "../types/types";

export const addItem = (item) => ({
    type: types.cartAddItem,
    payload: item
});

export const setCartItems = (cartItems) => ({
    type: types.cartSetItems,
    payload: cartItems
});

export const incrementItem = (item) => ({
    type: types.cartIncrementItem,
    payload: {
        ...item,
        cant: (item.cant + 1)
    }
});

export const setStatus = () => ({
    type: types.cartSetStatus
});

export const deleteItems = () => ({
    type: types.cartDeleteItems
});