import { getAuth,
    signInWithPopup,
     GoogleAuthProvider,signOut ,
     createUserWithEmailAndPassword ,
     onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from '../firebase/firebase.init'
initilizeAuthentication()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [user, setUser] = useState({})


   const signinWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
          
   }
 const register = (email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)


 }
 
   const singout=()=>{
       signOut(auth).then(() => {
           // Sign-out successful.
           setUser({})
         }).catch((error) => {
           // An error happened.
         });
   }
   useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
           if (user) {
               setUser(user);
           }
           else {
               setUser({})
           }
           setIsLoading(false);
       });
       return () => unsubscribed;
   }, [])

   return{
       signinWithGoogle,
       user,
       singout,
      
       register,
       setUser,
       isLoading,
       setIsLoading

   }
}
export default useFirebase;