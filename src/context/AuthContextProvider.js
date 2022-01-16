import React, { createContext, useContext, useState, useEffect } from "react";
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {auth} from "../utils/firebaseUtils"


const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading,setLoading] = useState(false);
  

  useEffect(() => {
      setLoading(true)
    const unsubcribe = onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
    });
    setLoading(false)
    return unsubcribe;
  },[]);
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    signOut(auth);
  }
  function loginWithGoogle() {
    GoogleAuthProvider.setCustomParameters({ propmt: "select_account" });
    signInWithPopup(auth, GoogleAuthProvider);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassord(password) {
    return currentUser.updatePassword(password);
  }

  const values = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
    updateEmail,
    updatePassord,
  };
  return <AuthContext.Provider value={values}>{!loading && children}</AuthContext.Provider>;
};

export default AuthContextProvider;
