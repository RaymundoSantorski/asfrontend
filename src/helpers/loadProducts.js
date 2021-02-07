import {db} from '../firebase/firebase-config';

export const loadProducts = async() => {
    const productsSnap = await db.collection('productos').get();
    const products = [];
    productsSnap.forEach(snap => {
        products.push({
            id: snap.id,
            ...snap.data()
        });
    });
    return products;
}