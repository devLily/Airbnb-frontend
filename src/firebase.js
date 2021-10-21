// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "./config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCjW7-OY_0jJUcRC4GdxDfkdvecH-t2GxQ",
//   authDomain: "airbnbclone-98866.firebaseapp.com",
//   projectId: "airbnbclone-98866",
//   storageBucket: "airbnbclone-98866.appspot.com",
//   messagingSenderId: "804167358152",
//   appId: "1:804167358152:web:9c057b59cff6fb5a5637fd",
//   measurementId: "G-VHSYL0NTDD",
// };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const storage = firebase.storage();

export { storage, apiKey };
