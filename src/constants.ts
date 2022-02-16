/* 
    Device OS Constants
*/
export type DeviceOS =
  | 'ANDROID'
  | 'IOS'
  | 'MAC'
  | 'WINDOWS'
  | 'LINUX'
  | 'UNIX'
  | 'CHROMEOS'
  | 'OTHER';


export const DeviceOSEnum : DeviceOS[] = [
    'ANDROID',
    'IOS',
    'MAC',
    'WINDOWS',
    'LINUX',
    'CHROMEOS',
    'UNIX',
    'OTHER'
];


export type DeviceType =
  | 'PHONE'
  | 'TABLET'
  | 'DESKTOP'
  | 'IPAD'
  | 'IPHONE'
  | 'CHROMEBOOK'
  | 'OTHER';

  export const DeviceTypeEnum : DeviceType[] = [
    'PHONE',
    'TABLET',
    'DESKTOP',
    'IPAD',
    'IPHONE',
    'CHROMEBOOK',
    'OTHER'
    ];


export type DeviceStatus =
| 'REGISTERED'
| 'CONNECTING'
| 'CONNECTED'
| 'DISCONNECTED'
| 'UNREACHABLE'
| 'MALFUNCTION'
| 'NOTAPPLICABLE'
| 'INACTIVE'
| 'OTHER';

export const DeviceStatusEnum : DeviceStatus[] = [
  'REGISTERED',
  'CONNECTING',
  'CONNECTED',
  'DISCONNECTED',
  'UNREACHABLE',
  'MALFUNCTION',
  'NOTAPPLICABLE',
  'INACTIVE',
  'OTHER'
  ];

export type DeviceRegMode =
| 'ANDROIDAPP'
| 'IOSAPP'
| 'QRCODE'
| 'MANUAL'
| 'DISCOVERY'
| 'OTHER';

export const DeviceRegModeEnum : DeviceRegMode[] = [
    'ANDROIDAPP',
    'IOSAPP',
    'QRCODE',
    'MANUAL',
    'DISCOVERY',
    'OTHER',
    ];

export type DeviceSubscribe =
| 'FREE'
| 'PAID'
| 'ENTERPRISE'
| 'COMMUNITY'
| 'TRIAL'
| 'OTHER';

export const DeviceSubscribeEnum : DeviceSubscribe[] = [
    'FREE',
    'PAID',
    'ENTERPRISE',
    'COMMUNITY',
    'TRIAL',
    'OTHER',
    ];


export type UserStatus =
| 'REGISTERED'
| 'ACTIVE'
| 'INACTIVE'
| 'OTHER';

export const UserStatusEnum : UserStatus[] = [
  'REGISTERED',
  'ACTIVE',
  'INACTIVE',
  'OTHER'
  ];

  export type UserType =
| 'INDIVIDUAL'
| 'ORGANISATION'
| 'GROUP'
| 'ADMIN'
| 'OTHER';

export const UserTypeEnum : UserType[] = [
  'INDIVIDUAL',
  'ORGANISATION',
  'GROUP',
  'ADMIN',
  'OTHER'
  ];

  export type UserSub =
  | 'FREE'
  | 'PAID'
  | 'ENTERPRISE'
  | 'COMMUNITY'
  | 'GROUP'
  | 'TRIAL'
  | 'OTHER';
  
  export const UserSubEnum : UserSub[] = [
    'FREE',
    'PAID',
    'ENTERPRISE',
    'COMMUNITY',
    'GROUP',
    'TRIAL',
    'OTHER',
    ];

    export type AccType = 
    | 'CUSTOMER'
    | 'ADMIN'
    | 'GROUPOWNER'
    | 'OTHER';

    export const AccTypeEnum : AccType[] = [
      'CUSTOMER',
      'ADMIN',
      'GROUPOWNER',
      'OTHER'
      ];