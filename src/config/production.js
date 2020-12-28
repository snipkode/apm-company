import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
var config = {
    apiKey: "AIzaSyD2xB7yRg7Uf0kbPimP3qx78bbsJVjZoyI",
    authDomain: "spedi-academy.firebaseapp.com",
    databaseURL: "https://spedi-academy.firebaseio.com",
    projectId: "spedi-academy",
    storageBucket: "spedi-academy.appspot.com",
    messagingSenderId: "345655921983",
    appId: "1:345655921983:web:0539d6d730f2a0dc87178a",
    measurementId: "G-KD0TVCH153"
  };
  // Initialize Firebase
firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;

	  
	  