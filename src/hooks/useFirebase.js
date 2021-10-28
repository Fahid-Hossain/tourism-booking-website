import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";

//firebase initialize
firebaseInitialize();
const useFirebase = () => {
    //useStates
    const [user,setUser]=useState({});
    const [error,setError]=useState("");

    //provider
    const googleProvider = new GoogleAuthProvider();
    //auth 
    const auth = getAuth();

    //googleSignIn
    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     const user = result.user;
            //     setUsers(user);
            //     // ...
            // }).catch((error) => {
            //     const errorMessage = error.message;
            //     setError(errorMessage);

            // });

    }
    return {
        user,
        setUser,
        error,
        googleSignIn

    }
}
export default useFirebase;