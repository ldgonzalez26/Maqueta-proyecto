import { getAuth, signOut } from "firebase/auth"

export const auth = getAuth();
export const signOutFirebase = () =>{

    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("pire boleta")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });

}