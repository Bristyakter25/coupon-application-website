// AuthProvider.js
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(null);
  console.log(user);


  const createNewUser = (email,password,)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);

  };

  const userLogin= (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);

  }

  const signInWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  
  
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);

  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,userLogin,signInWithGoogle,loading
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>{
      unSubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
