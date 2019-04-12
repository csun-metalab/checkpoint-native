//Axios import
import axios from './config';

const postUserLoginAPI = (payload, success, error) => {
    const data = {
        email: payload.username,
        password: payload.password
    };
    axios.API.post(`api/login`, data)
    .then(
        response => success(response),    
        response=> error(response)
    );
};
const postUserRegisterationAPI = (payload, success, error) => {
    //data will be reformated to just equal payload later
    const data = {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
        invitation_code: payload.invitation_code
    };
    axios.API.post(`api/register`, data)
    .then(
        response => success(response),
        response => error(response), 
    );
};
const postUserLogoutAPI = (success, error) => {    
    axios.API.post(`api/logout`, null)
    .then(
        response => success(response),
        response => error(response),    
    );
};

export default{
    postUserLoginAPI,
    postUserLogoutAPI,
    postUserRegisterationAPI
}