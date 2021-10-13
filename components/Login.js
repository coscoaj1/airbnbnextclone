import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import CancelX from "../public/images/x-svgrepo-com (1).svg";

const SignIn = () => {
  const signInWithFirebase = () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col h-auto w-96">
      <header className="flex flex-0 items-center">
        <button className="bg-gray-100 rounded-full">
          <CancelX width={18} className="px-1 py-1"></CancelX>
        </button>
        <button
          className="h-12 w-24 bg-gray-500 mb-4"
          onClick={signInWithFirebase}
        >
          Google sign in
        </button>
      </header>
    </div>
  );
};

export default SignIn;
