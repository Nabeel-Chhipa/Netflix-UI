// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAs3ljW72DzuEvRc4fpKjIgKlWxQpVxjPs",
  authDomain: "netflix-clone-cb655.firebaseapp.com",
  projectId: "netflix-clone-cb655",
  storageBucket: "netflix-clone-cb655.appspot.com",
  messagingSenderId: "849880691266",
  appId: "1:849880691266:web:8ffd9fba78ecc2f73bb3db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db