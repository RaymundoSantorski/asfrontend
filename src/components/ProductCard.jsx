import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import { addItem } from '../actions/cart';


export const ProductCard = ({id, title, description, price, img}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleProductView = () => {
        history.push(`/product/${id}`);
    }

    const handleAddItem = () => {
        dispatch(addItem({
            id,
            description,
            title,
            price,
            img
        }));
    }

    return (
        <div className="card" >
            <div className="" onClick={handleProductView}>
                <img src={img} alt="dark-galaxy" className="card-img" />
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
