import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAIu1xsUb4oOLz8FDF9djcWe8DoyLbWqC0",
  authDomain: "airbnbnextclone-d481c.firebaseapp.com",
  projectId: "airbnbnextclone-d481c",
  storageBucket: "airbnbnextclone-d481c.appspot.com",
  messagingSenderId: "40317560661",
  appId: "1:40317560661:web:6ae79b2dea2a094beaf1dc",
  measurementId: "G-MQ9Q1GYF6C",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
    console.log("firebase init");
  }
}
