import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
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
