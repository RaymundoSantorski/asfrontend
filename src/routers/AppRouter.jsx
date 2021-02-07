import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProductsScreen } from '../components/ProductsScreen';
import {Navbar} from '../components/Navbar';
import { ProductScreen } from '../components/ProductScreen';
import { CartScreen } from '../components/CartScreen';
import {useDispatch, useSelector} from 'react-redux';
import { setCartItems } from '../actions/cart';
import { startGettingProducts } from '../actions/products';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cart);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        dispatch(startGettingProducts());
        dispatch(setCartItems(items));
    },[dispatch]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },[cartItems]);

    return (
        <Router>
            <Navbar className="navbar" />
            <div>
                <Switch>
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart" component={CartScreen} />
                    <Route exact path="/" component={ProductsScreen} />
                </Switch>
            </div>
        </Router>
    )
}
