import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import { addItem, incrementItem } from '../actions/cart';
import { CartScreen } from './CartScreen';


export const ProductCard = ({id, title, description, price, img}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {cartItems} = useSelector(state => state.cart);

    const handleProductView = () => {
        history.push(`/product/${id}`);
    }

    const handleAddItem = () => {
        const item = cartItems.find(item => item.id === id);
        if(!item){
            dispatch(addItem({
                id,
                description,
                title,
                price,
                img,
                cant: 1
            }));
        }else{
            dispatch(incrementItem(item));
        }
    }

    return (
        <div className="card" >
            <div className="" onClick={handleProductView}>
                <img src={img} alt="dark-galaxy" loading="lazy" className="card-img" />
            </div>
            <div className="card-title">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="card-body">
                <p>
                    {description}
                </p>
            </div>
            <div className="card-body">
                ${price}
            </div>
            <div className="card-buttons">
                <button className="card-button primary">
                    Comprar
                </button>
                <button 
                    className="card-button secondary"
                    onClick={handleAddItem}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}
