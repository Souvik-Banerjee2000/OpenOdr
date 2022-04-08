import React, { useState,useContext } from 'react'
import UserTypeSwitch from "../UserTypeSwitch/UserTypeSwitch"
import RegisterOrLoginSwitch from "../RegisterOrLoginSwitch/RegisterOrLoginSwitch"
import useLocalStorage from "./../../hooks/useLocalStorage";
import  {UserTypeContext} from "../../context/UsertypeContext"
import {RegisterOrLoginContext} from "../../context/RegisterOrLoginContext"
import FormControl from '@mui/material/FormControl';
import { InputLabel,Input, FormHelperText } from '@mui/material';
import { Paper, Card, Typography, Button, Grid} from '@mui/material'
import {makeStyles} from '@material-ui/styles'
import { Item } from 'semantic-ui-react';
import "./authform.css";
import validator from 'validator'
// import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";



const useStyles = makeStyles(theme =>({

    inputlabel:{
        width: '100%',
        height:'100%',
        overflow:'hidden',
    },
    itemgrid:{
        marginTop:'40%'
    },
    submitButton:{
        margin:'20%',
        padding:'50%'
    }
}))


function AuthenticationForm() {

    const classes = useStyles()

    const [emailValue,setEmailValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');
    const [addressValue,setAddressValue] = useState('');
    const [submitApiValue,setSubmitApiValue] = useState('');
    const [nameValue,setNameValue] = useState('');
    const [detailOneValue,setDetailOneValue] = useState('');


    const {userTypeContextData,dispatchUserType} = useContext(UserTypeContext)
    const {registerOrLoginContext,dispatchRegisterOrLogin} = useContext(RegisterOrLoginContext)

    const [isAuthenticated,setIsAuthenticated] = useState(false);

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

    function redirect(){
        setIsAuthenticated(true);

    }
    async function fetchData(){
        if(userTypeContextData + registerOrLoginContext === "clientlogin"){
            // Call Api with below mentioned states
            //emailValue passwordValue
            //Api Route -> http://localhost:5000/api/auth/clientlogin

        }else if(userTypeContextData + registerOrLoginContext === "clientregister"){

            //emailValue passwordValue phoneValue nameValue addressValue
            //Api Route ->http://localhost:5000/api/auth/createclient
            
        }else if(userTypeContextData + registerOrLoginContext === "odrregister"){

            //emailValue passwordValue phoneValue nameValue submitApiValue detailOne addressValue
            // Api Route -> http://localhost:5000/api/auth/createcompany
            
        }else if(userTypeContextData + registerOrLoginContext === "companylogin"){

            //emailValue passwordValue
           // Api Route ->  http://localhost:5000/api/auth/companylogin
        }


        redirect();
    }

    async function submitForm(){
        

        let isAlerted = false;
        console.log(formFields());
        if(formFields().includes("email")){
            console.log("Email Address",emailValue);
            if(!validator.isEmail(emailValue)){
                toast("Invalid Email Address")
                isAlerted = true;
            }
        }
        if(formFields().includes("password")){
            if(passwordValue.length < 8){
                toast("Password Length Must be equal or greater than 8")
                isAlerted = true;

            }
        }

        if(formFields().includes("phone")){
            if(phoneValue.length != 10){
                toast("Phone Number length Must be 10")
                isAlerted = true;
            }
        }

        if(formFields().includes("address")){
            if(addressValue === ""){
                toast("Address is Empty")
                isAlerted = true;
            }
        }

        if(formFields().includes("submitApi")){
            if(submitApiValue === ""){
                toast("SubmitApi Value is Empty")
                isAlerted  = true;
            }
        }

        if(formFields().includes("detailOne")){
            if( detailOneValue === ""){
                toast("DetailOneValue Value is Empty")
                isAlerted = true;
            }
        }

        if(formFields().includes("name")){
            if( nameValue === ""){
                toast("Name is Empty")
                isAlerted  = true;
            }
        }
 

        if(!isAlerted)
            fetchData()
    }

    return (

        <div>
            {isAuthenticated && <Navigate to="/dashboards"/>}
             <ToastContainer />

            <Typography  component="h4" color="inherit" mt={2}>Vikalp</Typography>

            <Grid container spacing={2} direction="row" style={{width:'100vw'}}>
                <Grid item xs={6}> <UserTypeSwitch/> </Grid>
                <Grid item xs={6}> <RegisterOrLoginSwitch/> </Grid>
            </Grid>   

    <Grid container spacing={5} direction="row" style={{width:'100vw',marginTop:'1%',padding:'5%'}}>
    
                {formFields().includes("email") && (
                <Grid item  className={classes.itemgrid}  xs={6}   style={{width: ''}}>

                    <FormControl  className={classes.inputlabel}>
                        <Input aria-describedby='Enter your Email' placeholder="Enter your email" type="email" id="email-input" value={emailValue} onChange={(e)=>{handleChange('email',e.target.value)}} />
                        <FormHelperText>We will never share your email</FormHelperText>
                    </FormControl>
                </Grid>

                )}


            {formFields().includes("password") && (

                <Grid item className={classes.innergrid}  xs={6}>
                    <FormControl className={classes.inputlabel}>
                        <Input aria-describedby='Enter your Password' placeholder="Enter your password"  type="password" id="password-input" value={passwordValue} onChange={(e)=>{handleChange('password',e.target.value)}} />
                        <FormHelperText>Your password is protected with us</FormHelperText>
                    </FormControl>
                </Grid>
            )}


            {formFields().includes("phone") && (
                <Grid item  xs={6}>
                <FormControl className={classes.inputlabel}>
                    <Input aria-describedby='Enter your Phone' placeholder="Enter your phone" type="number" value={phoneValue} onChange={(e)=>{handleChange('phone',e.target.value)}} />
                </FormControl>
             </Grid>
            )}

            {formFields().includes("address") && (
                <Grid item xs={6}>
                    <FormControl className={classes.inputlabel}>
                        <Input aria-describedby='Enter your Address' placeholder="Enter your Address" type="text" value={addressValue} onChange={(e)=>{handleChange('address',e.target.value)}} />
                    </FormControl>
                </Grid>
            )}

            {formFields().includes("submitApi") && (
                <Grid item xs={6}>
                    <FormControl className={classes.inputlabel}>
                        <Input aria-describedby='Enter your API URL' type="text" placeholder="Enter your Api URL" value={submitApiValue} onChange={(e)=>{handleChange('submitApi',e.target.value)}} />
                    </FormControl>
                </Grid>
            )}

            {formFields().includes("name") && (
                <Grid item xs={6}>
                
                    <FormControl className={classes.inputlabel}>
                        <Input placeholder='Enter your Name' placeholder="Enter your name" type="text" value={nameValue} onChange={(e)=>{handleChange('name',e.target.value)}} />
                    </FormControl>
            
                </Grid>
            )}

            {formFields().includes("detailOne") && (
            <Grid item xs={6}>
            
            <FormControl className={classes.inputlabel}>
                <Input placeholder='Enter your DetailOneValue' placeholder="Enter your detailOne" type="text" value={detailOneValue} onChange={(e)=>{handleChange('detailOne',e.target.value)}} />
            </FormControl>
                
            </Grid>
            )}

    </Grid>
     <Button style={{marginTop:'5%',paddingLeft:'10%',paddingRight:'10%'}} type="submit" variant="contained" onClick={submitForm}>Submit</Button>



    </div>

    )
}

export default AuthenticationForm
