import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "ntf-clone-df308.firebaseapp.com",
    projectId: "ntf-clone-df308",
    storageBucket: "ntf-clone-df308.appspot.com",
    messagingSenderId: "564986128171",
    appId: import.meta.env.VITE_APP_ID
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };