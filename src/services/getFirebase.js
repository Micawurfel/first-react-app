import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCvuxOAFZmb8aSOe3Yb8gwN-cttueO7T0",
    authDomain: "first-proyect-a20df.firebaseapp.com",
    projectId: "first-proyect-a20df",
    storageBucket: "first-proyect-a20df.appspot.com",
    messagingSenderId: "206210537650",
    appId: "1:206210537650:web:5f9454fb4a99b2359311ab"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
  return firebase.firestore(app)
}

