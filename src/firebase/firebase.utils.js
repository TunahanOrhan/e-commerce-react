import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAQijlk8HQEhZr58sQ7bPzui8pEyFKtbzA",
  authDomain: "e-commerce-react-db-4d5ab.firebaseapp.com",
  projectId: "e-commerce-react-db-4d5ab",
  storageBucket: "e-commerce-react-db-4d5ab.appspot.com",
  messagingSenderId: "522190149260",
  appId: "1:522190149260:web:1b5cfc8412fae5adc8cda9",
  measurementId: "G-TM3B7ZMYD2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
