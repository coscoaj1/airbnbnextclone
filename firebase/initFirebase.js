import { firebase } from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAIu1xsUb4oOLz8FDF9djcWe8DoyLbWqC0",
//   authDomain: "airbnbnextclone-d481c.firebaseapp.com",
//   projectId: "airbnbnextclone-d481c",
//   storageBucket: "airbnbnextclone-d481c.appspot.com",
//   messagingSenderId: "40317560661",
//   appId: "1:40317560661:web:6ae79b2dea2a094beaf1dc",
//   measurementId: "G-MQ9Q1GYF6C",
// };
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
