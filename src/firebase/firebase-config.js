import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAklBDOZAEiUynvYGEZzyWcz6EoS_UV7Kg",
  authDomain: "curso-react-b7f9f.firebaseapp.com",
  databaseURL: "https://curso-react-b7f9f.firebaseio.com",
  projectId: "curso-react-b7f9f",
  storageBucket: "curso-react-b7f9f.appspot.com",
  messagingSenderId: "357897843528",
  appId: "1:357897843528:web:4842fd511cb84ed18f397d",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
