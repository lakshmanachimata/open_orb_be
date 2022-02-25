import mongoose from 'mongoose';
let Schema = mongoose.Schema;
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import logger from '../utils/logger';
import { ISession , Session} from '../models/session';
var jwt = require('jsonwebtoken');

export const createUserSession = async ( userData, body, user ,callback )=>{
  let token = jwt.sign({ userId : userData.userId, email: userData.email, deviceId : body.deviceId,  }, process.env.JWT_SESSION_KEY);
  const session : ISession = new Session({
    sessionToken :token,
    userId : userData.userId,
    ipaddress : body.ipaddress,
    actSessionToken : true,
    location : body.location,
    deviceId : body.deviceId,
    deviceLocale : body.deviceLocale,
    deviceHost : body.deviceHost,
    osVersion : body.osVersion,
    deviceOSVersion : body.deviceOSVersion,
    deviceModel : body.deviceModel,
    deviceMake : body.deviceMake,
    isPhysicalDevice : body.isPhysicalDevice,
    isActiveNow : true,
    lastActiveTime : new Date(),
  })
    session.save(function(error){
      if(error){
          logger.log("AUTHSVC" , "createUserSession  save error " + JSON.stringify(error) )
          return callback(token,false)
      }else{
          // logger.log("AUTHSVC" , "createUserSession  save success " + JSON.stringify(session) )
          return callback(token,true)
      }
  })
}

export const checkSession = async ( sessionToken, body, newUser ,callback )=>{
  callback(sessionToken);
}

export const removeSession = async ( sessionToken, body, newUser ,callback )=>{
  callback(sessionToken);
}

export const validateAndCreateUser = async ( body, callback )=>{
    try{
        let googleUserData : any = {}
        let gtokenUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=';
        gtokenUrl = gtokenUrl + body.idToken
        // logger.log("AUTHSVC" , "validateAndCreateUser url requesting "  + gtokenUrl);
        axios.get(gtokenUrl)
          .then(function (response) {
            // logger.log("AUTHSVC" , "validateAndCreateUser response  "  + JSON.stringify(response.data));
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
    validateAndCreateUser, createUserSession, checkSession , removeSession
}

export default authsvc