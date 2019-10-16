import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2VKw7XF3b2vRFzhUXBLCrQ8HInxwv1Ww",
  authDomain: "todo-hooks-53a9a.firebaseapp.com",
  databaseURL: "https://todo-hooks-53a9a.firebaseio.com",
  projectId: "todo-hooks-53a9a",
  storageBucket: "todo-hooks-53a9a.appspot.com",
  messagingSenderId: "646656220454",
  appId: "1:646656220454:web:cae34273193cd37b5875e7",
  measurementId: "G-8NJGJ76DFD"
});

const db = firebaseApp.firestore();

export {db};
