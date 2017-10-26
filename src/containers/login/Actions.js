import {userLogin} from '../../network/LoginApi';
import * as actionTypes from './ActionTypes';

export function login(username , password){
  return function(dispatch, getState){
    let requestData = {username : username , password : password};

    return userLogin(requestData).then((response) =>{
      dispatch(hydrateSuccessState(response));
    }).catch(function() {
      dispatch(hydrateErrorState({message : 'API DOWN'}));
    });;
  };
}



function hydrateSuccessState(data){

  return {
    type : actionTypes.SUBMIT_SUCCESS,
    data : data
  };
}

function hydrateErrorState(data){

  return {
    type : actionTypes.SUBMIT_ERROR,
    data : data
  };
}