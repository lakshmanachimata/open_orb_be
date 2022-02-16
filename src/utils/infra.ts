// register the message subscribers
import redisClient from './redis';
import dotenv from 'dotenv';
dotenv.config();
// const seed = () => {
//   var ENV = process.env.NODE_ENV || 'development';
//   if (ENV == 'development') {
//     // const Seed = require('./Utils/seed')
//     // Seed.seedOptions()
//     // Seed.seedMenuConfig()
//   }
// };

export default async () => {
  await redisClient.set('Health', '200');
  const redisHealth = await redisClient.get('Health');
  if (redisHealth == '200') {
  } else {
    throw new Error('Redis Could not connect');
  }
};
