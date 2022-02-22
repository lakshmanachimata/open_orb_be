import { model, Schema ,Model, Document } from 'mongoose';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import logger from '../utils/logger';
import { IUser, User } from '../models/usermodel'
import randomize  from 'randomatic'
import { v4 as uuidv4 } from 'uuid';
import {
    UserStatus,
    UserStatusEnum,
    UserType,
    UserTypeEnum,
    UserSub,
    UserSubEnum,
    AccType,
    AccTypeEnum
    } from '../constants';


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export const creatHNUserNow = async ( body, gres , callback ) => {
    let keyLength = randomIntFromInterval(10,20)
    const user: IUser = new User({
        googleid : gres.sub,
        userId :  uuidv4(),
        email : gres.email,
        name : gres.name,
        locale : gres.locale,
        googlepicurl : gres.picture,
        status : 'REGISTERED',
        type : (body.userType?body.userType:'INDIVIDUAL'),
        nwid : randomize('0', keyLength),
        regDate : new Date(),
        regSouce : (body.regSource?body.regSource:'APP' ),
        accType : (body.accType?body.accType:'CUSTOMER' ),
    }); 

    user.save(function(error){
        if(error){
            logger.log("USERSVC" , "creatHNUserNow  save error " + JSON.stringify(error) )
            return callback(undefined)
        }else{
            logger.log("USERSVC" , "creatHNUserNow  save success " + JSON.stringify(user) )
            return callback(user)
        }
    })
}

export const createHNUser = async ( body, gres , callback )=>{
    try{
        logger.log("USERSVC" , "createHNUser body \n" +   JSON.stringify(body )  + " google response \n " + JSON.stringify(gres));

        User.findOne({ email : gres.email}, function( exerror, eUser){
            if(exerror){
                logger.log("USERSVC" , "createHNUser  save error " + JSON.stringify(exerror) )
                return callback(undefined)
            }else{
                if(eUser){
                    logger.log("USERSVC" , "createHNUser  save success " + JSON.stringify(eUser) )
                    return callback(eUser)
                }else{
                    creatHNUserNow(body,gres,callback)
                }
            }
        })
        
    }
    catch(err){
        logger.log("USERSVC" , "createHNUser catch error" +   JSON.stringify(err) );
    }
}

let usersvc = {
    createHNUser, creatHNUserNow
}

export default usersvc