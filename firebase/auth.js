import firebase from "firebase/compat/app";
import React, { useState, useEffect, useContext, createContext } from "react";
import firebaseClient from "./firebaseClient";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import nookies from "nookies";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthProvider = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
