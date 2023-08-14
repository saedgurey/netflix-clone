import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "ntf-clone-df308.firebaseapp.com",
    projectId: "ntf-clone-df308",
    storageBucket: "ntf-clone-df308.appspot.com",
    messagingSenderId: "564986128171",
    appId: import.meta.env.VITE_APP_ID
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore();