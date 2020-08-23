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


export const createUserProfileDocument = async(userAuth, otherData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.currentUser.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth.currentUser;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    }
    catch(error){
      console.log('Caught Error while creating user ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;