import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyBccYkERnJXu1Fqwmagfy6Y19M5XjGghmY",
  authDomain: "auth-makeittastier.firebaseapp.com",
  projectId: "auth-makeittastier",
  storageBucket: "auth-makeittastier.appspot.com",
  messagingSenderId: "1024786678738",
  appId: "1:1024786678738:web:a14f30e2646482be16fe0b",
});

export default app;
