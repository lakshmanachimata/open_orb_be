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


export interface IUser {
  _id?: any;
  __v?: any;
  userId : string,
  googleid : String,
  email : string,
  phone : string,
  name : string,
  lastlogin : Date | string,
  lastip : string,
  status : {
    type : string,
    enum: UserStatus,
  },
  type : {
    type : string,
    enum: UserType,
  },
  regDate : Date | string,
  regSouce : string,
  subscription  : {
    type : string,
    enum: UserSub,
  },
  altphone : string,
  altemail : string,
  accType : {
    type : string,
    enum : AccType,
  },
  orgId : string,
  groupId : string,
}

const schema = new Schema<IUser>({
  userId :  {type : String},
  googleid : {type : String},
  email :  {type : String},
  phone :  {type : String},
  name :  {type : String},
  lastlogin : {type : Date},
  lastip : {type : String},
  status : {
    type : String,
    enum: UserStatusEnum,
  },
  type : {
    type : String,
    enum: UserTypeEnum,
  },
  regDate : {
    type : Date,
    default : Date.now
  },
  regSouce : {type : String},
  subscription  : {
    type : String,
    enum: UserSubEnum,
  },
  altphone : {type : String},
  altemail : {type : String},
  accType : {
    type : {type : String},
    enum : AccTypeEnum,
  },
  orgId : {type : String},
  groupId : {type : String}
})