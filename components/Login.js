import React, { useState } from "react";
import firebaseClient from "../firebase/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import cancelX from "../public/images/x-svgrepo-com (1).svg";

function Login() {
  return (
    <div className="flex flex-col h-auto w-96">
      <header className="flex flex-0 items-center">
        <button className="bg-gray-100 rounded-full">
          <cancelX width={18} className="px-1 py-1"></cancelX>
        </button>
        <div>Log in or sign up</div>
      </header>
    </div>
  );
}

export default Login;
