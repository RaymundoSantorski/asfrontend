import React from 'react';
import {useSelector} from 'react-redux'
import { ProductCard } from './ProductCard';

export const ProductsScreen = () => {

    const {products} = useSelector(state => state.products);

    return (
        <div className="products-screen">
            <div className="search-box">
                <form 
                    className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input 
                        type="text"
                        name="search"
                        placeholder="Buscar..."
                        autoComplete="off"
                        className="search-input"
                    />
                    <button
                        type="submit"
                        className="search-btn"
                    >
                        Buscar
                    </button>
                </form>
            </div>
            <div className="card-grid">

                {
                    products.map(product => (
                        <ProductCard 
                            key={product.id}
                            {...product}
                        />       
                    ))
                }
            </div>
        </div>
    )
}
