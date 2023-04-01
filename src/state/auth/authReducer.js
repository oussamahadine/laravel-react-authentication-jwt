import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authActions";

const initialState = {
    userInfo : {},
    isLoading : false,
    success : false,
    error : null,
    acessToken : null
}


const authReducer = createSlice({
    name:"auth",
    initialState,
    reducers : {
        logout : (state) => {
            localStorage.removeItem('auth')
            state.userInfo = {}
            state.isLoading = false
            state.success = false
            state.error = null
            state.acessToken = null
        },

        keepLoged : (state) => {
            state.userInfo = JSON.parse(localStorage.getItem('auth')).userInfo
            state.isLoading = false
            state.success = true
            state.error = null
            state.acessToken =  JSON.parse(localStorage.getItem('auth')).token
        }

    },
    extraReducers : {
        [login.pending]: (state) => {
            state.isLoading = true
            state.error = null
         },
         [login.fulfilled]: (state, action ) => {
            state.isLoading = false
            state.success =  action.payload.data.token && true
            state.acessToken =  action.payload.data.token
            state.userInfo =   action.payload.data.userInfo
            localStorage.setItem('auth', JSON.stringify({token :  action.payload.data.token, userInfo : action.payload.data.userInfo}))
         },
         [login.rejected]: (state,  action) => {
           state.isLoading = false
           state.error = action.payload
         },



        [register.pending]: (state) => {
            state.isLoading = true
            state.error = null
         },
         [register.fulfilled]: (state, action ) => {
            state.isLoading = false
            state.success = action.payload.data.token && true
            state.acessToken =  action.payload.data.token
            state.userInfo =  action.payload.data.userInfo
            localStorage.setItem('auth', JSON.stringify({token :  action.payload.data.token, userInfo : action.payload.data.userInfo}))

         },
         [register.rejected]: (state,  action) => {
           state.isLoading = false
           state.error = action.payload
         },

    }
})

export default authReducer.reducer
export const {logout, keepLoged} = authReducer.actions