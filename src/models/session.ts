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
      isActiveNow : string,
      lastActiveTime : string,
  }],
  gmailLogingInfo : {
      token : string,
      oAuthId : string,
      oAuthToken : string,
      name : string,
      email : string,
  }
}

const schema = new Schema<ISession>({
    userId : {type : String},
    session : {type : String},
    logindevices : [{
        loginip : {type : String},
        loginloc : {type : String},
        logintime : {type : String},
        loginUA : {type : String},
        deviceOS : {type : String},
        deviceMake:{type : String},
        deviceModel : {type : String},
        deviceid : {type : String},
        isActiveNow : {type : String},
        lastActiveTime : {type : String},
    }],
    gmailLogingInfo : {
        token : {type : String},
        oAuthId : {type : String},
        oAuthToken : {type : String},
        name : {type : String},
        email : {type : String},
    }
})