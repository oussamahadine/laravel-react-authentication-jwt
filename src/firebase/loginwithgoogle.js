import { app } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

export {
    auth,
    providerGoogle
}