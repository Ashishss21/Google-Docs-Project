import firebase from 'firebase';

import { firebaseConfig } from './firebase.config.js';

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;