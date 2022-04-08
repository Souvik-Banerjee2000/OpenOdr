import React from 'react'
import AuthenticationForm from "./components/AuthenticationForm/AuthenticationForm"
import UserTypeContextProvider from "./context/UsertypeContext"
import RegisterOrLoginContextProvider from "./context/RegisterOrLoginContext"
function AppMain() {
    return (
        <div>
        <UserTypeContextProvider>
          <RegisterOrLoginContextProvider>
            <AuthenticationForm/>
        </RegisterOrLoginContextProvider>
        </UserTypeContextProvider>
        </div>
    )
}

export default AppMain
