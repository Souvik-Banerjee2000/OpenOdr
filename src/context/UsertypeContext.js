import React , {createContext,useState,useReducer} from "react";
import {UserTypeReducer} from "../reducer/Usertypereducer"
export const UserTypeContext = createContext();


const UserTypeContextProvider = (props)=>{

    const [userTypeContextData,dispatchUserType] = useReducer(UserTypeReducer,{});
    return (
        <UserTypeContext.Provider value={{ userTypeContextData, dispatchUserType }}>
            {props.children}
        </UserTypeContext.Provider>
    )
}
export default UserTypeContextProvider;