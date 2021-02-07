import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../actions/cart';

export const ProductScreen = () => {

    const history = useHistory();

    const handleReturn = () => {
        history.goBack();
    }
    const returnText = '< Volver';

    const dispatch = useDispatch();

    const {products} = useSelector(state => state.products);
    const {id} = useParams();
    const product = products.find(product => product.id === id);

    if(!product){
        return (
            <p>
                No hay nada para mostrar
            </p>
        )
    }

    const handleAddItem = () => {
        dispatch(addItem({
            id: product.id,
            description: product.description,
            title: product.title,
            price: product.price,
            img: product.img
        }));
    }

    return (
        <div className="product-screen">
            <p onClick={handleReturn} className="return"> {returnText} </p>
            <div className="product-card">
                <img src={product.img} alt="dark-galaxy" className="product-img" />
            </div>
            <div className="product-info">
                <div className="product-title">
                    <h1>
                        {product.title}
                    </h1>
                </div>
                <div className="product-desc">
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className="product-price">
                    <strong>
                        ${product.price}
                    </strong>
                </div>
                <div className="card-buttons">
                    <button className="card-button primary">
                        Comprar
                    </button>
                    <button className="card-button secondary" onClick={handleAddItem}>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
