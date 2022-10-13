import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpoRMs7gh5NzhEfWljgJd0bFuQcWHwfTc",
  authDomain: "clone-b8e43.firebaseapp.com",
  projectId: "clone-b8e43",
  storageBucket: "clone-b8e43.appspot.com",
  messagingSenderId: "787191387891",
  appId: "1:787191387891:web:11642f5802a3c7f6ca0986",
  measurementId: "G-24ZY92E07E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
