import React, { useContext, useEffect } from 'react'
import "../../Switch.css"
import {RegisterOrLoginContext} from "../../context/RegisterOrLoginContext"
function RegisterOrLoginSwitch() {
    const {registerOrLoginContext,dispatchRegisterOrLogin} = useContext(RegisterOrLoginContext)


    function isObjectEmpty(obj){
        return Object.keys(obj).length === 0;
    }
    function toogleSwitch(){

        if( (registerOrLoginContext instanceof Object && isObjectEmpty(registerOrLoginContext)) || registerOrLoginContext.toLowerCase() === "login"){
            dispatchRegisterOrLogin({
                type:"register",
                value:"register"
            })
        }else if (registerOrLoginContext.toLowerCase() === "register"){
            dispatchRegisterOrLogin({
                type:"login",
                value:"login"
            })
        }
    }
    useEffect(()=>{
        if (registerOrLoginContext instanceof Object && isObjectEmpty(registerOrLoginContext)){
            dispatchRegisterOrLogin({
                type:"register",
                value:"register"
            })
        }
    },[])
    return (
        <div> 
        {console.log(typeof(registerOrLoginContext))}
        {/* { typeof(registerOrLoginContext) === String && (JSON.stringify(registerOrLoginContext))} */}

        {JSON.stringify(registerOrLoginContext)}

        <label className="switch">
            <input type="checkbox" onClick={toogleSwitch}/>
            <span className="slider round"></span>
        </label>
    </div>
    )
}

export default RegisterOrLoginSwitch
