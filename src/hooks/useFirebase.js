import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";

//firebase initialize
firebaseInitialize();
const useFirebase = () => {
    //useStates
    const [user,setUser]=useState({});
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(true);

    //provider
    const googleProvider = new GoogleAuthProvider();
    //auth 
    const auth = getAuth();

    //googleSignIn
    const googleSignIn = () => {
        setIsLoading(true);
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

    //observe whether user auth state changed or not
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("user from observer",user);
              // ...
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return ()=> unsubscribe;
    },[])

    //logout 
       // sign out 
       const logOut = () => {
           setIsLoading(true);
        signOut(auth)
            .then(() => {
                // setUser({});
            }).catch((error) => {
                // An error happened.
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        setUser,
        error,
        setError,
        googleSignIn,
        logOut,
        isLoading

    }
}
export default useFirebase;