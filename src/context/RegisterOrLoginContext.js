import React , {createContext,useState,useReducer} from "react";
import {RegisterOrLoginReducer} from "../reducer/RegisterOrLoginReducer"
export const RegisterOrLoginContext = createContext();


const RegisterOrLoginContextProvider = (props)=>{

    const [registerOrLoginContext,dispatchRegisterOrLogin] = useReducer(RegisterOrLoginReducer,{});
    return (
        <RegisterOrLoginContext.Provider value={{ registerOrLoginContext, dispatchRegisterOrLogin }}>
            {props.children}
        </RegisterOrLoginContext.Provider>
    )
}
export default RegisterOrLoginContextProvider;