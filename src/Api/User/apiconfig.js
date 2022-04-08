import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5000/api'
})


export const cretaeClient = (email,phone,password,name,address) =>{
    api.post('/auth/createClient').then((res)=>res.data)
}

export const clientLogin = (email,password) =>{
    api.post('/auth/clientlogin').then((res)=>res.data)
}

export const createCompany = (name,email,phone,address,submitApi,password,detailOne) =>{
    api.post('/auth/createCompany').then((res)=>res.data)
}

export const companyLogin = (email,password) =>{
    api.post('/auth/companylogin').then((res)=>res.data)
}