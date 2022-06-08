import * as firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyAjORaYuJYCubjzoO9hHVFiNWcchqD4Ook",
  authDomain: "foundryapp-9cc57.firebaseapp.com",
  projectId: "foundryapp-9cc57",
  storageBucket: "foundryapp-9cc57.appspot.com",
  messagingSenderId: "1019039415577",
  appId: "1:1019039415577:web:471bf1408d02b78640d988",
  measurementId: "G-B6EJ3S7CMT"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.default.auth(app);

