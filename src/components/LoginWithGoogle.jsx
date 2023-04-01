import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, providerGoogle } from '../firebase/loginwithgoogle';

const LoginWithGooglec = () => {

    const handleClick = async () => {
        await signInWithPopup(auth, providerGoogle)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <button type='button' onClick={()=> handleClick()}> login with google</button>
        </div>
    )
}

export default LoginWithGooglec