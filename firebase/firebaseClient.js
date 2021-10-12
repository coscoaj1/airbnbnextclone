import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAIu1xsUb4oOLz8FDF9djcWe8DoyLbWqC0",
  authDomain: "airbnbnextclone-d481c.firebaseapp.com",
  projectId: "airbnbnextclone-d481c",
  storageBucket: "airbnbnextclone-d481c.appspot.com",
  messagingSenderId: "40317560661",
  appId: "1:40317560661:web:6ae79b2dea2a094beaf1dc",
  measurementId: "G-MQ9Q1GYF6C",
});

const auth = getAuth(firebaseApp);

onAuthStateChanged((auth, user) => {
  if (user != null) {
    console.log("user logged in");
  } else {
    console.log("no user");
  }
});
