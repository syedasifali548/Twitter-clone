import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHweURYNvldifLg3SHKEB3055g82eXuIE",
    authDomain: "twitter-clone-c4e50.firebaseapp.com",
    projectId: "twitter-clone-c4e50",
    storageBucket: "twitter-clone-c4e50.appspot.com",
    messagingSenderId: "232972930052",
    appId: "1:232972930052:web:28705e9313d8c8e26b7951",
    measurementId: "G-S7137ERPTG"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export default db;