import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebaseConexion/firebaseConfig'

export const auth = getAuth(app);
export const signOutFirebase = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("log out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};
