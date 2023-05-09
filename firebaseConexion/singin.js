import { app } from '../firebaseConexion/firebaseConfig'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const auth = getAuth(app);

export default async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}