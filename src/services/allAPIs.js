import {serverURL} from './serverURL';
import commonAPI from './commonAPI';

//register user
export const registerUserAPI = async (reqBody) => {
    return await commonAPI("POST",`${serverURL}/api/registerUser`, reqBody, {});
}

//login user
export const loginUserAPI = async (reqBody) => {
    return await commonAPI("POST",`${serverURL}/api/loginUser`, reqBody, {});
}

//add product
export const addProductAPI = async (reqBody,reqHeaders) => {
    return await commonAPI("POST",`${serverURL}/api/products`, reqBody, reqHeaders);
}

//get all products
export const getAllProductsAPI = async (reqHeaders) => {
    return await commonAPI("GET",`${serverURL}/api/products`, {}, reqHeaders);
}