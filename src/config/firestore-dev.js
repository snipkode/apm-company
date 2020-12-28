import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
var config = {
  apiKey: "AIzaSyD2xB7yRg7Uf0kbPimP3qx78bbsJVjZoyI",
  authDomain: "e-workstrap.firebaseapp.com",
  databaseURL: "https://e-workstrap.firebaseio.com",
  projectId: "e-workstrap",
  };
  // Initialize Firebase
firebase.initializeApp(config);

if (window.location.hostname === "localhost") {
	console.log('testing localy -- hitting local functions and firestore emulators');
  firebase.firestore().settings({host: "localhost:8081", ssl: false});
  firebase.functions().useFunctionsEmulator('http://localhost:5001');
}

export const db = firebase.firestore();
export const functions = firebase.functions();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;

	  
	  