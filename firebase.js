//Importing Firebase Dependencies
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Firebase Configuration Import
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
if (!firebase.apps.length) {
  const firebaseApp = initializeApp(firebaseConfig);
}
else{
  firebase.app();
}

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
