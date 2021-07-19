import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByP3_GLVgUG_KPtMuBHYTxc9pcTEUzwH8",
    authDomain: "reevo-f42c5.firebaseapp.com",
    projectId: "reevo-f42c5",
    storageBucket: "reevo-f42c5.appspot.com",
    messagingSenderId: "346192953874",
    appId: "1:346192953874:web:aa0055b49fec8376d30ecb"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};