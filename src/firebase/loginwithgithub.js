import { app } from "./firebase";
import { GithubAuthProvider, getAuth } from "firebase/auth";




const auth = getAuth(app);
const providerGithub = new GithubAuthProvider();

export {
    auth,
    providerGithub
}