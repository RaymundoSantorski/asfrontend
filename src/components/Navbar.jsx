import React from 'react';
import {useDispatch} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { setStatus } from '../actions/cart';

export const Navbar = () => {

    const {innerWidth: width, innerHeight: height} = window;
    const history = useHistory();
    const dispatch = useDispatch();

    const cartButton = () => {
       if(width>768){
           dispatch(setStatus());
       }else{
           history.push('/cart');
       }
    }

    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-link">
                <h1 className="navbar-title">Apapachate Store</h1>
            </NavLink>
            <NavLink className="navbar-link navbar-carrito" to="/cart">
                <img src="./shopping-cart.png" alt="shopping cart" className="cart-icon" />
            </NavLink>
        </div>
    )
}
