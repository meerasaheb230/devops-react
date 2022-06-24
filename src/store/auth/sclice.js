import {createSlice} from "@reduxjs/toolkit";

export const authSclice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        token:null,
        error:null,
        loading:false,
    },
    reducer:{
        loginStart: (state) =>{
            state.loading=true;
            state.error=null;
        },
        loginSuccess: (state,action) =>{
            state.error=null
            state.loading=false
            state.user=action.payload.user
            state.token=action.payload.token
        },
        loginFailure: (state,action) =>{
            state.error=true
            state.loading=action.payload.error;
        },
    }
});

export const {loginStart,loginSuccess,loginFailure}=authSclice.action;
export const authReducer=authSclice.reducer;