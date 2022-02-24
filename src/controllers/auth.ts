import mongoose from 'mongoose';
import logger from '../utils/logger';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { validate } from 'express-validation';
import { GAuthRequest } from '../utils/reqschema';

import authsvc from '../services/authsvc'
import usersvc from '../services/usersvc'

let Schema = mongoose.Schema;


module.exports = function (app) {
    app.route('/hnoapi/validategtoken' , [validate(GAuthRequest)])
        .post(async (req, res) => {
            authsvc.validateAndCreateUser(req.body,function(gresponse){
                if(gresponse){
                    logger.log( "AUTH","received response body is     " + JSON.stringify(gresponse) )
                    switch(gresponse.status){
                        case 1:
                            usersvc.createHNUser(req.body, gresponse.data ,function(userData: any, newUser) {
                                if(userData.userId){
                                    authsvc.createUserSession(userData,req.body,newUser,function(token,success){
                                        //TODO handle failure of saving session Token
                                        userData.token = token;
                                        if(success){
                                            return res.json({status: 200, message: userData, env: process.env.NODE_ENV});
                                        }else{
                                            return res.json({status: 200, message: userData, env: process.env.NODE_ENV});
                                        }
                                    })
                                }else{
                                    return res.json({status: 200, message: (userData.message?userData.message:"Unable to create user"), env: process.env.NODE_ENV});
                                }
                            })
                            break;
                        case 2:
                            return res.json({status: 200, message: "OK", env: process.env.NODE_ENV});
                        }
                }else{
                    return res.json({status: 401, message: "FAILED", env: process.env.NODE_ENV});
                }
                
            })
        })
}