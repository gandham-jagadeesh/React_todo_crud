import { initializeApp } from "firebase/app";
import  {getFireStore}  from "firebase/database"

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appIdd,
  measurementId: "G-PMW92L494V"
};

export const app = initializeApp(firebaseConfig);
export const db  = getFireStore(app);