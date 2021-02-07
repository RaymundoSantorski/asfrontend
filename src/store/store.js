import thunk from 'redux-thunk';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {cartReducer} from '../reducers/cartReducer';
import { productReducer } from '../reducers/productsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cart: cartReducer,
    products: productReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)