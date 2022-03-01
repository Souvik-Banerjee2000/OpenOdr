import React, { useState,useContext } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import UserTypeSwitch from "../UserTypeSwitch/UserTypeSwitch"
import RegisterOrLoginSwitch from "../RegisterOrLoginSwitch/RegisterOrLoginSwitch"
import useLocalStorage from "./../../hooks/useLocalStorage";
import  {UserTypeContext} from "../../context/UsertypeContext"
import {RegisterOrLoginContext} from "../../context/RegisterOrLoginContext"




function AuthenticationForm() {

    const [emailValue,setEmailValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');
    const [addressValue,setAddressValue] = useState('');
    const [submitApiValue,setSubmitApiValue] = useState('');
    const [nameValue,setNameValue] = useState('');
    const [detailOneValue,setDetailOneValue] = useState('');

    const {userTypeContextData,dispatchUserType} = useContext(UserTypeContext)
    const {registerOrLoginContext,dispatchRegisterOrLogin} = useContext(RegisterOrLoginContext)

    function formFields(){
        switch (userTypeContextData + registerOrLoginContext) {
            case "clientlogin":
                console.log("clientlogin");
                return [
                    'email',
                    'password'
                ]
                
            case "clientregister":
                return[
                    "email",
                    "password",
                    "name",
                    "address",
                    "phone"
                ] 
    
            case "odrregister":
                return [
                    "name",
                    "email",
                    "phone",
                    "address",
                    "submitApi",
                    "password",
                    "detailOne"
                ]
            case "companylogin":
                return[
                    "email",
                    "password"
                ]
            
                    
            default:
                return [
                    "email",
                    "password"
                ]
                
        }
    }

    function handleChange(type,value){
        if(type.toLowerCase() === 'email'){
            setEmailValue(value)
        }else if(type.toLowerCase() === "password"){
            setPasswordValue(value)
        }else if(type.toLowerCase() === "phone"){
            setPhoneValue(value)
        }else if(type.toLowerCase() === "name"){
            setNameValue(value)
        }else if(type.toLowerCase() === "detailone"){
            setDetailOneValue(value)
        }else if(type.toLowerCase() === "submitapi"){
            console.log(value);
            setSubmitApiValue(value)
        }else if(type.toLowerCase() === "address"){
            setAddressValue(value)
        }
    }

    async function fetchData(){

    }

    function submitForm(){
        fetchData();
    }

    return (

    <Form onSubmit={submitForm}>
        <UserTypeSwitch/>
        <RegisterOrLoginSwitch/>

        <Form.Group>

            {formFields().includes("email") && (
            <Form.Field>
                <label>Enter your email</label>
                <input placeholder='Enter your Email' type="email" value={emailValue} onChange={(e)=>{handleChange('email',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("password") && (
            <Form.Field>
                <label>Enter your Password</label>
                <input placeholder='Enter your Password' type="password" value={passwordValue} onChange={(e)=>{handleChange('password',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("phone") && (
            <Form.Field>
                <label>Enter your Phone</label>
                <input placeholder='Enter your Phone' type="text" value={phoneValue} onChange={(e)=>{handleChange('phone',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("address") && (
            <Form.Field>
                <label>Enter your Address</label>
                <input placeholder='Enter your Address' type="text" value={addressValue} onChange={(e)=>{handleChange('address',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("submitApi") && (
            <Form.Field>
                <label>Enter your Api URL</label>
                <input placeholder='Enter your API URL' type="text" value={submitApiValue} onChange={(e)=>{handleChange('submitApi',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("name") && (
            <Form.Field>
                <label>Enter your Name</label>
                <input placeholder='Enter your Name' type="text" value={nameValue} onChange={(e)=>{handleChange('name',e.target.value)}} />
            </Form.Field>
            )}

            {formFields().includes("detailOne") && (
            <Form.Field>
                <label>Enter your DetailOneValue</label>
                <input placeholder='Enter your DetailOneValue' type="text" value={detailOneValue} onChange={(e)=>{handleChange('detailOne',e.target.value)}} />
            </Form.Field>
            )}

        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>

    )
}

export default AuthenticationForm
