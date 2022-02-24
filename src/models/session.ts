import { model, Schema ,Model, Document, ObjectId } from 'mongoose';


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


export interface ISession extends Document {
  _id?: any;
  __v?: any;
  userId : string,
  actSessionToken : boolean,
  sessionToken : string,
  ipaddress : string,
  location : string,
  deviceId :  string,
  deviceLocale : string,
  deviceHost : string,
  osVersion:string,
  deviceOS : string,
  deviceOSVersion : string,
  deviceModel: string,
  deviceMake: string,
  isPhysicalDevice: string,
  isActiveNow : boolean,
  lastActiveTime : Date | string,
  gmailLogingInfo : {
      token : string,
      oAuthId : string,
      oAuthToken : string,
      name : string,
      email : string,
  }
}

const SessionSchema = new Schema<ISession>({
    userId : {type : String},
    actSessionToken : {type : Boolean},
    sessionToken : {type : String},
    ipaddress : {type : String},
    location : {type : String},
    deviceId : {type : String},
    deviceLocale : {type : String},
    deviceHost : {type : String},
    osVersion:{type : String},
    deviceOS : {type : String},
    deviceOSVersion : {type : String},
    deviceModel: {type : String},
    deviceMake: {type : String},
    isPhysicalDevice: {type : String},
    isActiveNow : {type : Boolean},
    lastActiveTime : {type : String},
    gmailLogingInfo : {
        token : {type : String},
        oAuthId : {type : String},
        oAuthToken : {type : String},
        name : {type : String},
        email : {type : String},
    }
})

export const Session : Model<ISession> = model('Session', SessionSchema);
