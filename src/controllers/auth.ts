import mongoose from 'mongoose';
import logger from '../utils/logger';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { validate } from 'express-validation';
import { GAuthRequest } from '../utils/reqschema';

import authsvc from '../services/authsvc'
import usersvc from '../services/usersvc'
import { User, IUser } from '../models/usermodel';

let Schema = mongoose.Schema;


module.exports = function (app) {
    app.route('/hnoapi/validategtoken' , [validate(GAuthRequest)])
        .post(async (req, res) => {
            authsvc.validateAndCreateUser(req.body,function(gresponse){
                if(gresponse){
                    // logger.log( "AUTH","received response body is     " + JSON.stringify(gresponse) )
                    switch(gresponse.status){
                        case 1:
                            usersvc.createHNUser(req.body, gresponse.data ,function(userData: IUser ,newUser, message = "") {
                                if(userData.userId){
                                    authsvc.createUserSession(userData,req.body,newUser,function(token,success){
                                        //TODO handle failure of saving session Token
                                        let userDataObj = userData.toObject();
                                        userDataObj.token = token;
                                        logger.log( "AUTH","received response user    " + JSON.stringify(userDataObj) +  "  for token " + token )
                                        if(success){
                                            return res.status(200).send({status: 1, message: userDataObj, env: process.env.NODE_ENV});
                                        }else{
                                            return res.status(200).send({status: 1, message: userDataObj, env: process.env.NODE_ENV});
                                        }
                                    })
                                }else{
                                    return res.status(500).send({status: 0, message: (message?message:"Unable to create user"), env: process.env.NODE_ENV});
                                }
                            })
                            break;
                        case 2:
                            return res.json({status: 200, message: "OK", env: process.env.NODE_ENV});
                        }
                }else{
                    return res.status(401).send({status: 2, message: "FAILED", env: process.env.NODE_ENV});
                }
                
            })
        })
}