import firebase from "firebase";

const firebaseConfig = {
 

  apiKey: "AIzaSyDqV4g_fVNscx7Ds45pUcZb0MAnGDuqnkI",
  authDomain: "whats-app-clone-14df9.firebaseapp.com",
  projectId: "whats-app-clone-14df9",
  storageBucket: "whats-app-clone-14df9.appspot.com",
  messagingSenderId: "682598029765",
  appId: "1:682598029765:web:08feb78bde39ecea5953ac"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
