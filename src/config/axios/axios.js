import axios from "axios";
import {API} from '../utilits/utilits'


const defaultAxios = axios.create({
    baseURL:API
})


const axiosRequest = axios.create({
    baseURL:API,
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
})

export {defaultAxios,axiosRequest}