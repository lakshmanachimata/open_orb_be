import { model, Schema ,Model, Document, ObjectId } from 'mongoose';


import {
    DeviceOS,
    DeviceOSEnum,
    DeviceType,
    DeviceTypeEnum,
    DeviceStatus,
    DeviceStatusEnum,
    DeviceRegMode,
    DeviceRegModeEnum,
    DeviceSubscribe,
    DeviceSubscribeEnum,
  } from '../constants';



export interface IDevice extends Document {
    _id?: any;
    __v?: any;
    deviceid?: string;
    userid? : string;
    devicetype: {
        type : string,
        enum: DeviceType,
    };
    deviceos?: {
        type : string,
        enum: DeviceOS,
    };
    regDate? : {
        type: Date,
        default: Date | string,
    },
    lastAccessDate : {
        type: Date,
        default: Date | string,
    },
    deviceTags : [string],
    deviceGroup : [string],
    accUsers : [string],
    inactiveSpan : {        // show as inactive if last accessed date is more than 30 days
        type : Number,
        default : 30
    },
    status : {
        type : string,
        enum: DeviceStatus,
    };
    regMode : {
        type : string,
        enum: DeviceRegMode,
    },
    regUser? : string;
    orgId? : string;
    orgGroupId? : string;
    subcribeStatus : {
        type : string,
        enum: DeviceSubscribe,
    }
    tenantId? : string;
    devicecaps : [string],
  }

  const schema = new Schema<IDevice>({

    deviceid: {type : String},
    userid : { type: ObjectId },
    devicetype: {
        type : {type : String},
        enum: DeviceTypeEnum,
    },
    deviceos: {
        type : {type : String},
        enum: DeviceOSEnum,
    },
    regDate : {
        type: Date,
        default: Date.now,
    },
    lastAccessDate : {
        type: Date,
        default: Date.now,
    },
    deviceTags : [{type : String}],
    deviceGroup : [{type : String},],
    accUsers : [{ type: Schema.Types.ObjectId }],
    inactiveSpan : {        // show as inactive if last accessed date is more than 30 days
        type : Number,
        default : 30
    },
    status : {
        type : {type : String},
        enum: DeviceStatusEnum,
    },
    regMode : {
        type : {type : String},
        enum: DeviceRegModeEnum,
    },
    regUser : { type :  ObjectId },
    orgId : { type: ObjectId },
    orgGroupId : { type: ObjectId },
    subcribeStatus : {
        type : {type : String},
        enum: DeviceSubscribeEnum,
    },
    devicecaps : [{type : String}],
  });

