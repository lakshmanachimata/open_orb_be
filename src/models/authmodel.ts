import mongoose from 'mongoose';
let Schema = mongoose.Schema;

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


export interface IAuth {
  _id?: any;
  __v?: any;
  userId : string,
  session : string,
  logindevices : [{
      loginip : string,
      loginloc : string,
      logintime : string,
      loginUA : string,
      deviceOS : string,
      deviceMake:string,
      deviceModel : string,
      deviceid : string,
      loginDate : Date | string,
      isActiveNow : string,
      lastActiveTime : string,
  }],
  gmailLogingInfo : {
    idToken : {type : String},
    accessToken : {type : String},
    serverAuthCode : {type : String},
    displayName : {type : String},
    email : {type : String},
    id : {type : String},
    photoUrl : {type : String},
}
}

const schema = new Schema<IAuth>({
    userId : {type : String},
    session : {type : String},
    logindevices : [{
        loginip : {type : String},
        loginloc : {type : String},
        logintime : {type : String},
        loginUA : {type : String},
        loginDate : {type : Date},
        deviceOS : {type : String},
        deviceMake:{type : String},
        deviceModel : {type : String},
        deviceid : {type : String},
        isActiveNow : {type : String},
        lastActiveTime : {type : String},
    }],
    gmailLogingInfo : {
        idToken : {type : String},
        accessToken : {type : String},
        serverAuthCode : {type : String},
        displayName : {type : String},
        email : {type : String},
        id : {type : String},
        photoUrl : {type : String},
    }
})