import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAj4JrUnDK9Eat1Z2uVpg6h25chCQxxJKA",
  authDomain: "docs-94968.firebaseapp.com",
  projectId: "docs-94968",
  storageBucket: "docs-94968.appspot.com",
  messagingSenderId: "774695656953",
  appId: "1:774695656953:web:a82a7216cac0184b947128"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const db = firebaseApp.firestore();

export default db;