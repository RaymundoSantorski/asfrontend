import React from 'react';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import { AppRouter } from './routers/AppRouter';
import {store} from './store/store';

export const AS = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
