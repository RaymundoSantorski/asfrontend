import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmkHLRdhIBItHiczxOoi_I3H8VL6WM5fE",
    authDomain: "apapachatestore-c7d74.firebaseapp.com",
    projectId: "apapachatestore-c7d74",
    storageBucket: "apapachatestore-c7d74.appspot.com",
    messagingSenderId: "538858354353",
    appId: "1:538858354353:web:6f077aa8fc657e499dd490"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}