import {doPostRequest} from './BaseApi';

export function userLogin(data){
   return doPostRequest('/login' , data);
}

