import { types } from "../types/types";

const initialState = {
    cartItems: []
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
        default: 
            return state;
    }
}