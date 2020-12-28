import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/database';

if(window.location.hostname !== 'localhost'){
  var config = {
    apiKey: "AIzaSyD2xB7yRg7Uf0kbPimP3qx78bbsJVjZoyI",
    authDomain: "cv-denature.firebaseapp.com",
    databaseURL: "https://cv-denature.firebaseio.com",
    projectId: "cv-denature",
    storageBucket: "cv-denature.appspot.com",
    messagingSenderId: "345655921983",
    appId: "1:345655921983:web:0539d6d730f2a0dc87178a",
    measurementId: "G-KD0TVCH153"
    };
} else {
   config = {
    apiKey: "AIzaSyD2xB7yRg7Uf0kbPimP3qx78bbsJVjZoyI",
    authDomain: "cv-denature.firebaseapp.com",
    databaseURL: "http://localhost:9000?ns=cv-denature",
    projectId: "cv-denature",
    storageBucket: "cv-denature.appspot.com",
    messagingSenderId: "345655921983",
    appId: "1:345655921983:web:0539d6d730f2a0dc87178a",
    measurementId: "G-KD0TVCH153"
    };
}

firebase.initializeApp(config);

if (window.location.hostname === "localhost") {
	console.log('testing localy -- hitting local functions and firestore emulators');
  firebase.firestore().settings({host: "localhost:8081", ssl: false});
  firebase.functions().useFunctionsEmulator('http://localhost:5001');
} 


  // Initialize Firebase
export const db = firebase.firestore();
export const rtdb = firebase.database();
export const functions = firebase.functions();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;

	  
	  