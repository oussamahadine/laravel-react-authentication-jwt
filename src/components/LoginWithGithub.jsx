import React from 'react'
import { providerGithub, auth } from '../firebase/loginwithgithub'
import { signInWithPopup } from "firebase/auth";

const LoginWithGithub = () => {
    const handleClick = () => {

        signInWithPopup(auth, providerGithub)
            .then((result) => {
                const credential = providerGithub.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = providerGithub.credentialFromError(error);
            });

        }
    return (
        <div>
            <button type='button' onClick={() => handleClick()}> login with github</button>
        </div>
    )
}

export default LoginWithGithub