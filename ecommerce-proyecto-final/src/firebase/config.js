import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv76c5ON-yVdtMhwUsKwHX9Zg2_V9e28w",
  authDomain: "karros-autopartes-fdaa6.firebaseapp.com",
  projectId: "karros-autopartes-fdaa6",
  storageBucket: "karros-autopartes-fdaa6.firebasestorage.app",
  messagingSenderId: "955401004237",
  appId: "1:955401004237:web:ed66a9c92b410c6f2db584"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);