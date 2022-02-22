import { model, Schema ,Model, Document } from 'mongoose';

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


export interface IUser extends Document {
  _id?: any;
  __v?: any;
  userId : string,
  googleid : String,
  googlepicurl : String,
  nwid : number,
  email : string,
  phone : string,
  name : string,
  locale : string,
  lastlogin : Date | string,
  lastip : string,
  status : {type : string,enum: UserStatus,},
  type : {type : string,enum: UserType,},
  regDate : Date | string,
  regSouce : string,
  subscription  : {type : string,enum: UserSub},
  altphone : string,
  altemail : string,
  accType : {type : string,enum : AccType,},
  orgId : string,
  groupId : string,
}

const UserSchema = new Schema<IUser>({
  userId :  {type : String, unique : true, required : true, dropDups: true},
  googleid : {type : String, unique : true, required : true, dropDups: true},
  nwid : {type : Number},
  email :  {type : String, unique : true, required : true, dropDups: true},
  phone :  {type : String},
  locale :  {type : String},
  googlepicurl : {type : String},
  name :  {type : String},
  lastlogin : {type : Date},
  lastip : {type : String},
  status : {type : String,enum: UserStatusEnum,},
  type : {type : String,enum: UserTypeEnum,},
  regDate : {type : Date,default : Date.now, unique : true, required : true, dropDups: true},
  regSouce : {type : String},
  subscription  : {type : String,enum: UserSubEnum,},
  altphone : {type : String},
  altemail : {type : String},
  accType :  {type : String,enum : AccTypeEnum,},
  orgId : {type : String},
  groupId : {type : String}
})


export const User : Model<IUser> = model('User', UserSchema);
