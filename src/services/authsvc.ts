import mongoose from 'mongoose';
let Schema = mongoose.Schema;
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import logger from '../utils/logger';


export const validateAndCreateUser = async ( body, callback )=>{
    try{
        let googleUserData : any = {}
        let gtokenUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=';
        gtokenUrl = gtokenUrl + body.idToken
        logger.log("AUTHSVC" , "validateAndCreateUser url requesting "  + gtokenUrl);
        axios.get(gtokenUrl)
          .then(function (response) {
            logger.log("AUTHSVC" , "validateAndCreateUser response  "  + JSON.stringify(response.data));
            googleUserData = response.data;
          })
          .catch(function (error) {
            logger.log("AUTHSVC" , "validateAndCreateUser error "  + error);
            googleUserData = undefined
          })
          .then(function () {
              let gresObj = {
                  status : -1,
                  errorCode : 100,
                  data : {},
                  message : "UNAUTHORISED"
              }
              if(googleUserData && googleUserData.email ){
                if(googleUserData.email == body.email){
                  logger.log("AUTHSVC" , "validateAndCreateUser email_verified  "  + googleUserData.email_verified);
                  if(googleUserData.email_verified){
                    gresObj.status = 1,
                    gresObj.data = googleUserData;
                    gresObj.message = "AUTHORISED"
                  }else{
                    gresObj.data = googleUserData;
                    gresObj.message = "Email not verified"
                    gresObj.errorCode = 103
                  }
                }else{
                  gresObj.data = googleUserData;
                  gresObj.message = "Email not matched"
                  gresObj.errorCode = 102
                }
              }else{
                gresObj.data = googleUserData;
                gresObj.message = "Email does not exists"
                gresObj.errorCode = 101
              }
              return callback(gresObj)
          });
    }
    catch(err){
        logger.log("AUTHSVC" , "validateAndCreateUser catch error" +   JSON.stringify(err) );
    }
}

let authsvc = {
    validateAndCreateUser
}

export default authsvc