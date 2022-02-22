import dotenv from 'dotenv';
import { IRedisConfig } from './ioredismodel';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const redisIPList = process.env.REDIS_IPS;
const redisPassword = process.env.REDIS_PASSWORD;
const redisPort = process.env.REDIS_PORT || '6379';

const formatForDev = (): IRedisConfig => {
  return {
    host: 'localhost',
    port: parseInt(redisPort),
  };
};

const formatForStaging = (): IRedisConfig => {
  if (!redisIPList || redisIPList == '') {
    return null;
  }
  const ipList = redisIPList.split(',');
  return {
    host: ipList[0],
    port: parseInt(redisPort),
    auth_pass: redisPassword,
    password: redisPassword,
  };
};

const formatForProd = (): IRedisConfig => {
  const ipList = redisIPList.split(',');
  const redisNodes = [];
  for (let i = 0; i < ipList.length; i++) {
    const ip = ipList[i];
    redisNodes.push({
      host: ip,
      port: 26379,
    });
  }
  return {
    sentinels: redisNodes,
    name: 'homenet',
    sentinelPassword: redisPassword,
    password: redisPassword,
  };
};

const configMap = new Map([
  ['development', formatForDev],
  ['staging', formatForStaging],
  ['production', formatForProd],
]);

export const getConfigForRedis = () => {
  const getConfig = configMap.get(env) || configMap.get('development');
  return getConfig();
};
