import fetch from 'isomorphic-fetch';

const defaultOptions = {
  method: "POST",
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  credentials: "same-origin"
}


export function makeRequest(uri , options = defaultOptions){
  uri = `${process.env.API_URI}${uri}`;
  return fetch( uri, options ).then(function(response) {
     if (response.status >= 400) {
         //will be throwing some betting structured error messages.
         throw new Error("Bad response from server");
     }
     //returns a json request.
     return response.json();
  });
}


/**
  Used for making get request to the api.
*/
export function doGetRequest(uri , data , options = defaultOptions  ){
  options.method = 'GET';
  return makeRequest(uri , options);
}

/**
  Used for making post request to the api.
*/
export function doPostRequest(uri, data, options = defaultOptions){
  options.body = JSON.stringify(data);
  options.method = 'POST';
  return makeRequest(uri , options);
}

