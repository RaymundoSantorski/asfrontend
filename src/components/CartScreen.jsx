import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { deleteItems } from '../actions/cart';

export const CartScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleReturn = () => {
        history.goBack();
    }

    const goToBuy = () => {
        history.push('/');
    }

    const handleDeleteItems = () => {
        dispatch(deleteItems());
    }   

    const {cartItems} = useSelector(state => state.cart);
    let total = 0;

    const returnText = '< Volver';

    if(cartItems.length <= 0){
        return (
            <div className="cart-items-empty">
                <p onClick={handleReturn} className="return"> {returnText} </p>
                <h1 className="empty-text">No hay productos</h1>
                <div className="cart-buttons-empty">
                    <button 
                        className="card-button btn-block primary"
                        onClick={goToBuy}
                    >
                        Empezar a comprar
                    </button>
                </div>
                
            </div>
            
        )
    }

    return(
        <>
            <div className="cart-items">
                <p onClick={handleReturn} className="return"> {returnText} </p>
                {
                    cartItems.map(item => {
                        total+=Number(item.price);
                        return (
                            <p key={item.id}>{item.title} <strong>${item.price}</strong></p>
                        );
                    })
                }

                <div className="cart-buttons">
                    <h1 className="cart-total">Total: <strong>${total}</strong></h1>
                    <button 
                        className="card-button outline-warning"
                        onClick={handleDeleteItems}
                    >
                        Vaciar carrito
                    </button>
                    <button className="card-button secondary">
                        Pagar
                    </button>
                </div>
            </div>
            
        </>
    );
}