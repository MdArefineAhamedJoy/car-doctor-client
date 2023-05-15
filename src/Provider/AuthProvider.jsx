import React, { createContext, useEffect, useState } from "react";


import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = ()=>{
    return signInWithPopup(auth, provider)

  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if(currentUser && currentUser.email){
        const logdinUser = {
          email: currentUser.email,
        };
        console.log(logdinUser.email)
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logdinUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("car-access-token", data.token);
           
          });
      }else{
        localStorage.removeItem('car-access-token')
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    loginWithGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
