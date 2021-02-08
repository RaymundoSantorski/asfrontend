import { types } from "../types/types";

const initialState = {
    cartItems: [],
    cartStatus: false
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case types.cartAddItem:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        case types.cartSetItems:
            return {
                ...state,
                cartItems: action.payload
            }
        case types.cartDeleteItems:
            return {
                ...state,
                cartItems: []
            }
        case types.cartSetStatus:
            return {
                ...state,
                cartStatus: !state.cartStatus
            }
        case types.cartIncrementItem:
            const index = state.cartItems.findIndex(item => item.id === action.payload.id);
            const cartItems = [...state.cartItems];
            cartItems[index] = action.payload;
            return {
                ...state,
                cartItems
            }
        default: 
            return state;
    }
}