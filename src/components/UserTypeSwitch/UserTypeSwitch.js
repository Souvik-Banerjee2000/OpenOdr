import React, { useContext, useEffect} from 'react'
import "../../Switch.css"
import  {UserTypeContext} from "../../context/UsertypeContext"
function UserTypeSwitch() {
    const {userTypeContextData,dispatchUserType} = useContext(UserTypeContext)
    

    function isObjectEmpty(obj){
        return Object.keys(obj).length === 0;
    }
    function toogleSwitch(){

        if( (userTypeContextData instanceof Object && isObjectEmpty(userTypeContextData)) || userTypeContextData.toLowerCase() === "client"){
            console.log("14");
            dispatchUserType({
                type:"odr",
                value:"odr"
            })
        }else if (userTypeContextData.toLowerCase() === "odr"){
            console.log("21");
            dispatchUserType({
                type:"client",
                value:"client"
            })
        }
    }
    useEffect(()=>{
        if (userTypeContextData instanceof Object && isObjectEmpty(userTypeContextData)){
            dispatchUserType({
                type:"odr",
                value:"odr"
            })
        }
    },[])
    return (
        <div> 
            {console.log(typeof(userTypeContextData))}
            {console.log(userTypeContextData)}
            {/* { typeof(userTypeContextData) === String && (JSON.stringify(userTypeContextData))} */}

            <span>{JSON.stringify(userTypeContextData).replaceAll('"','').toUpperCase()}</span>
            <br></br> <br></br>
            <label className="switch">
                <input type="checkbox" onClick={toogleSwitch}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default UserTypeSwitch
