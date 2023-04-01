import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state/auth/authReducer";

export const store = configureStore({
    reducer : {
        auth : authReducer
    }
})