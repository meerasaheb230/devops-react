import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/sclice";

export const store=configureStore({
    reducer:{
        auth:authReducer,
    }
})