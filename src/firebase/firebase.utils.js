import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-B7hPb7Ukon2L6HNki44Zbi9sMki5T64",
    authDomain: "react-ecommerce-website-3326e.firebaseapp.com",
    databaseURL: "https://react-ecommerce-website-3326e.firebaseio.com",
    projectId: "react-ecommerce-website-3326e",
    storageBucket: "react-ecommerce-website-3326e.appspot.com",
    messagingSenderId: "271138012850",
    appId: "1:271138012850:web:8e4e4bcaeb1a99184c93ab",
    measurementId: "G-XJD57XV3KY"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;