import mongoose from 'mongoose';
import logger from '../utils/logger';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { validate } from 'express-validation';
import { GAuthRequest } from '../utils/reqschema';

import authsvc from '../services/authsvc'
let Schema = mongoose.Schema;


module.exports = function (app) {
    app.route('/hnoapi/validategtoken' , [validate(GAuthRequest)])
        .post(async (req, res) => {
            logger.log( "AUTH","received request body is     " + JSON.stringify(req.body) )
            authsvc.validateAndCreateUser(req.body,function(gresponse){
                if(gresponse){
                    switch(gresponse.status){
                        case 1:
                            return res.json({status: 200, message: "OK", env: process.env.NODE_ENV});
                        case 2:
                            return res.json({status: 200, message: "OK", env: process.env.NODE_ENV});
                        }
                }else{
                    return res.json({status: 401, message: "FAILED", env: process.env.NODE_ENV});
                }
                
            })
        })
}